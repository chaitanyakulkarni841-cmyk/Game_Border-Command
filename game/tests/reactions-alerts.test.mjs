import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,DEFAULT,add,tick,deploy,suggestedDeployment,SPECS,command,attackSelected,detect,deserialize,effectiveRange} from '../lib/game/engine.ts';
import {battleAlert,recentAlerts} from '../lib/game/alerts.ts';
import {WORLD_LINEAR_SCALE,ENGAGEMENT_RANGE_MULTIPLIER} from '../lib/game/world.ts';

function quiet(){const g=createGame({...DEFAULT,scenario:'sandbox'});g.units=g.units.filter(u=>g.originalBases.includes(u.id));g.theatre.crossings.forEach(c=>{c.open=false;delete c.assetId;});g.nextWave=g.aiClock=g.theatre.nextOffer=10000;g.running=g.started=true;return g;}
const step=(g,n=1)=>{for(let i=0;i<n;i++)tick(g,.1);};

test('newly deployed aircraft, drones, infantry and tanks automatically engage local eligible threats after setup',()=>{
  for(const kind of ['rafale','armeddrone','infantry','t90']){
    const g=quiet(),p=suggestedDeployment(g,kind);assert.ok(p);assert.equal(deploy(g,kind,p),null);const u=g.units.at(-1),foe=add(g,'infantry','pakistan',{x:p.x+7,y:p.y});foe.ammo=0;
    step(g,10);assert.equal(u.ammo,SPECS[kind].ammo);step(g,72);
    assert.ok(u.ammo<SPECS[kind].ammo,kind);assert.equal(u.order,'hold');assert.equal(u.target,undefined);assert.equal(g.alerts.length,0,'outgoing attacks do not become friendly warnings');
  }
});
test('local defence preserves a manual route and its queued destination',()=>{
  const g=quiet(),u=add(g,'t90','india',{x:620,y:580}),foe=add(g,'infantry','pakistan',{x:627,y:580});foe.ammo=0;
  assert.equal(command(g,[u.id],{x:660,y:580}),null);assert.equal(command(g,[u.id],{x:680,y:580},'patrol',undefined,true),null);
  const queue=JSON.stringify(u.queue);step(g);assert.ok(u.ammo<SPECS.t90.ammo);assert.equal(u.order,'move');assert.equal(JSON.stringify(u.queue),queue);assert.ok(u.path.length);
});
test('a manual attack target has priority over a closer contact',()=>{
  const g=quiet(),u=add(g,'rafale','india',{x:620,y:580}),near=add(g,'infantry','pakistan',{x:625,y:580}),target=add(g,'infantry','pakistan',{x:630,y:580});near.ammo=target.ammo=0;detect(g);
  assert.equal(attackSelected(g,[u.id],target.id).issued,1);step(g);assert.equal(g.missiles.find(m=>m.sourceId===u.id).target,target.id);
});
test('service, deployment, cooldown, stand-down and out-of-range contacts suppress autonomous fire',()=>{
  for(const gate of ['service','setup','cooldown','truce','range']){
    const g=quiet(),u=add(g,'t90','india',{x:620,y:580}),foe=add(g,'infantry','pakistan',{x:gate==='range'?850:627,y:580});foe.ammo=0;
    if(gate==='truce')g.theatre.truceUntil=10;else if(gate!=='range')u[gate]=10;
    step(g);assert.equal(u.ammo,SPECS.t90.ammo,gate);
  }
});
test('recon orders avoid unsolicited surface attacks and cruise launchers remain manual',()=>{
  for(const kind of ['rafale','brahmos','drone']){const g=quiet(),u=add(g,kind,'india',{x:620,y:580}),foe=add(g,'infantry','pakistan',{x:627,y:580});foe.ammo=0;if(kind==='rafale')u.order='recon';step(g);assert.equal(u.ammo,SPECS[kind].ammo);assert.equal(g.missiles.length,0);}
});
test('holding aircraft return to rearm when empty and do not fire while returning',()=>{
  const g=quiet(),u=add(g,'rafale','india',{x:620,y:580});u.ammo=0;step(g);assert.equal(u.order,'return');assert.ok(u.path.length);u.ammo=3;const foe=add(g,'infantry','pakistan',{x:u.x+5,y:u.y});foe.ammo=0;step(g);assert.equal(u.ammo,3);assert.equal(g.missiles.length,0);
});
test('ranges gain 25 percent in world distance independently of the smaller map',()=>{
  const g=quiet(),u=add(g,'t90','india',{x:620,y:580});assert.ok(Math.abs(effectiveRange(g,u)*WORLD_LINEAR_SCALE-SPECS.t90.range*1.25)<1e-9);assert.equal(ENGAGEMENT_RANGE_MULTIPLIER,1.25);
});
test('hostile launches raise an alert before impact at the friendly location without attacker information',()=>{
  const g=quiet(),u=add(g,'infantry','india',{x:620,y:580}),foe=add(g,'jf17','pakistan',{x:627,y:580},'Unseen attacker');u.ammo=0;step(g);
  assert.equal(g.alerts.length,1);const a=g.alerts[0];assert.equal(a.phase,'incoming');assert.equal(a.unitId,u.id);assert.equal(a.x,u.x);assert.equal(a.y,u.y);assert.equal(u.hp,SPECS.infantry.hp);assert.ok(!JSON.stringify(a).includes('Unseen attacker'));
  step(g,35);assert.ok(['hit','lost','missed'].includes(a.phase));
});
test('incident groups retain outcomes, acknowledge independently, expire, pause and survive saves',()=>{
  const g=quiet(),u=add(g,'t90','india',{x:620,y:580});battleAlert(g,u,'incoming');const a=g.alerts[0];battleAlert(g,u,'hit',12);battleAlert(g,u,'incoming');assert.equal(g.alerts.length,1);assert.equal(a.attacks,2);assert.equal(a.phase,'hit');assert.equal(a.damage,12);
  a.readAt=g.time;assert.equal(recentAlerts(g).filter(a=>a.time>a.readAt).length,0);g.running=false;const before=JSON.stringify(g.alerts);step(g,10);assert.equal(JSON.stringify(g.alerts),before);
  const restored=deserialize(JSON.stringify(g));assert.ok(restored);assert.deepEqual(restored.alerts,g.alerts);g.time=91;assert.equal(recentAlerts(g).length,0);
  const legacy=JSON.parse(JSON.stringify(g));delete legacy.alerts;assert.deepEqual(deserialize(JSON.stringify(legacy)).alerts,[]);legacy.alerts=[{x:'invalid'}];assert.equal(deserialize(JSON.stringify(legacy)),null);
});
