import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,DEFAULT,SPECS,add,tick,service,canHit,detectionRange,effectiveRange,deserialize,detect,attackSelected,endExercise,maxHp,income,command} from '../lib/game/engine.ts';
import {AUTO_RESUPPLY_SECONDS,emptyStock} from '../lib/game/maintenance.ts';
import {engagementDistance} from '../lib/game/world.ts';
import {civilianImpact,buildCrossing,groundEdge} from '../lib/game/theatre.ts';
import {missionScoreboard} from '../lib/game/report.ts';
import {renderPosition,captureMotion,resetMotion} from '../lib/game/motion.ts';
const step=(g,seconds)=>{for(let i=0;i<Math.round(seconds*10);i++)tick(g,.1);};
function quiet(){const g=createGame({...DEFAULT,scenario:'sandbox',difficulty:'custom',fog:false});g.units=g.units.filter(u=>g.originalBases.includes(u.id));g.theatre.crossings.forEach(c=>{c.open=false;delete c.assetId;});g.nextWave=g.aiClock=g.theatre.nextOffer=1e6;g.started=g.running=true;return g;}
function hit(g,u,damage){g.missiles.push({id:++g.id,from:{x:u.x+3,y:u.y},to:{x:u.x,y:u.y},team:u.team==='india'?'pakistan':'india',target:u.id,age:0,duration:.1,damage,source:'Test shell',profile:'shell',hit:true});step(g,.1);}

test('fighter detection and engagement are exactly 5x; S400/Akash are 4x; other archetypes are unchanged',()=>{
 const g=quiet();add(g,'radar','india',{x:620,y:580});
 for(const kind of ['rafale','su30','tejas','jf17','f16','j10','s400','akash','t90','armeddrone']){const u=add(g,kind,'india',{x:620,y:580}),factor=['s400','akash'].includes(kind)?4:['t90','armeddrone'].includes(kind)?1:5;assert.ok(Math.abs(effectiveRange(g,u)-engagementDistance(SPECS[kind].range)*factor)<1e-8,kind);g.weather=.64;assert.ok(Math.abs(detectionRange(g,u)-engagementDistance(SPECS[kind].vision)*factor*.64)<1e-8,kind);g.weather=1;}
});
test('SAMs automatically engage armed ground vehicles across expanded coverage, without targeting unarmed infrastructure',()=>{
 for(const kind of ['s400','akash']){const g=quiet(),u=add(g,kind,'india',{x:585,y:285}),v=add(g,'alkhalid','pakistan',{x:655,y:285});v.cooldown=100;assert.ok(canHit(u,v));assert.equal(canHit(u,{kind:'industry'}),false);assert.equal(canHit(u,{kind:'bridge'}),false);assert.equal(canHit(u,{kind:'logistics'}),false);step(g,.1);assert.ok(u.ammo<SPECS[kind].ammo);assert.ok(g.missiles.some(m=>m.sourceId===u.id&&m.target===v.id));}
});
test('every equipment branch slowly replenishes integer stock and heals after a delay, including disconnected units and both sides',()=>{
 const g=quiet(),units=['t90','rafale','s400','destroyer','radar','industry','brahmos'].flatMap(kind=>['india','pakistan'].map(team=>add(g,kind,team,{x:900,y:850})));
 for(const u of units){u.hp=maxHp(u)/2;u.ammo=0;u.cooldown=1000;}g.theatre.truceUntil=1000;
 step(g,19);for(const u of units){assert.equal(u.hp,maxHp(u)/2);assert.equal(u.ammo,0);}step(g,6);
 for(const u of units){assert.ok(u.hp>maxHp(u)/2&&u.hp<maxHp(u)*.52,u.kind);assert.equal(u.ammo,SPECS[u.kind].ammo?1:0,u.kind);assert.ok(Number.isInteger(u.ammo));}
});
test('manual servicing is faster and aircraft service is charged exactly once',()=>{
 for(const kind of ['t90','rafale']){const g=quiet(),u=add(g,kind,'india',{x:585,y:285});u.ammo=0;u.hp=maxHp(u)/2;const before=g.spent;assert.equal(service(g,[u.id],true),null);step(g,13);assert.equal(g.spent-before,65);assert.equal(u.ammo,SPECS[kind].ammo);assert.equal(u.hp,maxHp(u));assert.equal(u.fastService,false);}
});
test('damage restarts healing delay; passive repair never overfills upgraded units or resurrects wrecks',()=>{
 const g=quiet(),u=add(g,'t90','india',{x:620,y:580}),dead=add(g,'radar','india',{x:640,y:580});u.level=2;u.hp=maxHp(u)/2;u.cooldown=1000;dead.hp=0;step(g,25);hit(g,u,5);const hp=u.hp;step(g,19);assert.equal(u.hp,hp);step(g,3);assert.ok(u.hp>hp);u.hp=maxHp(u)-.01;step(g,1);assert.equal(u.hp,maxHp(u));assert.equal(dead.hp,0);
});
test('automatic empty-aircraft recovery is slow and does not spend fast-service credits',()=>{
 const g=quiet(),u=add(g,'rafale','india',{x:585,y:285});u.ammo=0;const spent=g.spent;step(g,35);assert.equal(u.ammo,1);assert.equal(u.service,0);assert.equal(u.fastService,false);assert.equal(g.spent,spent);assert.ok(u.fuel>99);step(g,160);assert.equal(u.ammo,SPECS.rafale.ammo);assert.equal(u.order,'hold');
});
test('empty-stock indicator excludes all unarmed support platforms',()=>{for(const kind of ['t90','rafale','brahmos'])assert.equal(emptyStock({kind,ammo:0}),true);for(const kind of ['radar','logistics','bridge','drone'])assert.equal(emptyStock({kind,ammo:0}),false);});
test('maintenance and cumulative reports survive save/resume, reject malformed values, and freeze when paused or finished',()=>{
 const g=quiet(),u=add(g,'t90','india',{x:620,y:580});u.ammo=0;hit(g,u,25);civilianImpact(g,g.theatre.civilians[0],true);step(g,12);const restored=deserialize(JSON.stringify(g));assert.ok(restored);assert.deepEqual(restored.report,g.report);assert.equal(restored.units.find(v=>v.id===u.id).resupplyClock,u.resupplyClock);const before=JSON.stringify(restored);tick(restored,.1);assert.equal(JSON.stringify(restored),before);restored.running=true;endExercise(restored);const finished=JSON.stringify(restored);tick(restored,1);assert.equal(JSON.stringify(restored),finished);const invalid=JSON.parse(JSON.stringify(g));invalid.units[0].resupplyClock=-1;assert.equal(deserialize(JSON.stringify(invalid)),null);invalid.units[0].resupplyClock=0;invalid.report.panicGenerated=-2;assert.equal(deserialize(JSON.stringify(invalid)),null);
});
test('scenario industry appears in every sector without earning unrequested income or counting as construction',()=>{
 const g=createGame({...DEFAULT,scenario:'economy'}),industries=g.units.filter(u=>u.kind==='industry');assert.equal(industries.length,9);assert.ok(industries.every(u=>u.scenarioInfrastructure));const withIndustry=income(g);g.units=g.units.filter(u=>u.kind!=='industry');assert.equal(income(g),withIndustry);assert.equal(g.built,0);
});
test('identified infrastructure accepts click attacks and its damage causes tracked civilian panic',()=>{
 const g=quiet(),v=add(g,'industry','pakistan',{x:590,y:430}),u=add(g,'rafale','india',{x:585,y:430});detect(g);assert.equal(attackSelected(g,[u.id],v.id).issued,1);u.cooldown=1000;hit(g,v,50);const report=missionScoreboard(g);assert.equal(report.infrastructure.length,1);assert.equal(report.infrastructure[0].damage,50);assert.ok(report.panicGenerated>0);assert.ok(report.affectedCenters>0);step(g,30);assert.equal(missionScoreboard(g).infrastructure[0].damage,50,'repair cannot erase historical damage');assert.ok(v.hp>SPECS.industry.hp-50);
});
test('destroying a bridge immediately closes a crossing, and engineers rebuild an attackable replacement',()=>{
 const g=createGame({...DEFAULT,scenario:'sandbox',fog:false});g.running=g.started=true;g.nextWave=g.aiClock=g.theatre.nextOffer=1e6;g.units.forEach(u=>u.cooldown=1e6);const crossing=g.theatre.crossings.find(c=>c.id==='east-span'),bridge=g.units.find(u=>u.id===crossing.assetId);assert.ok(bridge?.hp>0);hit(g,bridge,10000);assert.equal(crossing.open,false);assert.equal(bridge.hp,0);assert.equal(missionScoreboard(g).infrastructure[0].destroyed,true);const e=add(g,'bridgelayer','india',{x:crossing.x+3,y:crossing.y});assert.equal(buildCrossing(g,crossing.id,[e.id]),null);step(g,25.1);assert.equal(crossing.open,true);assert.notEqual(crossing.assetId,bridge.id);assert.ok(g.units.find(u=>u.id===crossing.assetId)?.hp>0);assert.equal(bridge.hp,0);assert.ok(deserialize(JSON.stringify(g)));
});
test('legacy saves gain infrastructure once and initialize maintenance and report history safely',()=>{
 const g=quiet();delete g.report;for(const u of g.units){delete u.resupplyClock;delete u.lastDamageAt;delete u.fastService;}g.time=100;const a=deserialize(JSON.stringify(g));assert.ok(a);assert.equal(a.report.fromTime,100);assert.equal(a.units.filter(u=>u.kind==='industry').length,9);const b=deserialize(JSON.stringify(a));assert.equal(b.units.length,a.units.length);
});
test('render interpolation is smooth, does not mutate simulation, and never follows hidden contacts',()=>{
 const g=quiet(),u=add(g,'t90','india',{x:620,y:580});u.heading=350;captureMotion(g,.1);u.x+=10;u.heading=10;const half=renderPosition(g,u,.05);assert.equal(half.x,625);assert.equal(half.heading,360);assert.equal(u.x,630);assert.equal(renderPosition(g,u,.1).x,630);g.running=false;assert.equal(renderPosition(g,u,0).x,630);g.running=true;const c={id:999,x:200,y:200,heading:90,kind:'jf17',name:'Known contact',hp:90,seen:g.time,identified:true};g.contacts.india[c.id]=c;captureMotion(g,.1);g.contacts.india[c.id]={...c,x:210};assert.equal(renderPosition(g,g.contacts.india[c.id],.05,true).x,205);g.time+=2;assert.equal(renderPosition(g,g.contacts.india[c.id],.05,true).x,210);
});

test('zero-vision bridge never blocks detection of a co-located enemy',()=>{const g=quiet();g.settings.fog=true;const p={x:620,y:580};add(g,'bridge','india',p);add(g,'radar','india',{x:621,y:580});const enemy=add(g,'infantry','pakistan',p);detect(g);assert.ok(g.contacts.india[enemy.id]?.identified);});
test('legacy prepaid aircraft repair remains fast, and a broken saved bridge cannot reopen itself',()=>{const g=createGame({...DEFAULT,scenario:'sandbox'}),u=g.units.find(u=>u.kind==='rafale');u.x=585;u.y=285;u.ammo=0;u.hp=30;service(g,[u.id],true);delete u.fastService;const c=g.theatre.crossings.find(c=>c.open);g.units.find(v=>v.id===c.assetId).hp=0;const restored=deserialize(JSON.stringify(g));assert.ok(restored);assert.equal(restored.theatre.crossings.find(v=>v.id===c.id).open,false);restored.running=restored.started=true;restored.nextWave=restored.aiClock=1e6;restored.theatre.truceUntil=1e6;step(restored,13);const repaired=restored.units.find(v=>v.id===u.id);assert.equal(repaired.hp,maxHp(repaired));assert.equal(repaired.ammo,SPECS.rafale.ammo);assert.equal(restored.units.find(v=>v.id===c.assetId).hp,0);});
test('resetting motion history prevents a pause/resume backstep',()=>{const g=quiet(),u=add(g,'t90','india',{x:620,y:580});captureMotion(g,.1);u.x=625;resetMotion(g);assert.equal(renderPosition(g,u,0).x,625);});
