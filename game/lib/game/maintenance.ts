import {SPECS} from './catalog.ts';
import type {Kind} from './catalog.ts';
import type {Game,Unit} from './engine.ts';
export const AUTO_RESUPPLY_SECONDS=24;
export const AUTO_REPAIR_DELAY=20;
export const AUTO_REPAIR_RATE=.0015;
export const coverageMultiplier=(kind:Kind)=>['rafale','su30','tejas','jf17','f16','j10'].includes(kind)?5:['s400','akash'].includes(kind)?4:1;
export const emptyStock=(u:Pick<Unit,'kind'|'ammo'>)=>SPECS[u.kind].ammo>0&&u.ammo===0;
export function passiveMaintenance(g:Game,u:Unit,dt:number){
 if(u.hp<=0||u.delivered||u.setup>0||u.service>0)return;
 const s=SPECS[u.kind];
 if(s.ammo>0&&u.ammo<s.ammo){u.resupplyClock+=dt;const rounds=Math.floor((u.resupplyClock+1e-9)/AUTO_RESUPPLY_SECONDS);if(rounds){u.ammo=Math.min(s.ammo,u.ammo+rounds);u.resupplyClock=Math.max(0,u.resupplyClock-rounds*AUTO_RESUPPLY_SECONDS);}}else u.resupplyClock=0;
 const healingTime=Math.min(dt,Math.max(0,g.time-u.lastDamageAt-AUTO_REPAIR_DELAY));
 if(healingTime>0)u.hp=Math.min(s.hp*(1+u.level*.2),u.hp+s.hp*(1+u.level*.2)*AUTO_REPAIR_RATE*healingTime);
}
