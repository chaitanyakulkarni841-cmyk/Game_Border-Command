import {SPECS} from './catalog.ts';
import type {Kind,Team} from './catalog.ts';
import type {Game,Unit} from './engine.ts';
export type DamageRecord={id:number;kind:Kind;team:Team;damage:number;destroyed:boolean};
export type MissionReport={fromTime:number;assets:Record<number,DamageRecord>;panicGenerated:number;peakPanic:number;affectedCenters:string[]};
export const newReport=(fromTime=0):MissionReport=>({fromTime,assets:{},panicGenerated:0,peakPanic:0,affectedCenters:[]});
export const isInfrastructure=(u:Pick<Unit,'kind'>)=>u.kind==='industry'||u.kind==='bridge';
export function recordDamage(g:Game,u:Unit,amount:number){const r=g.report.assets[u.id]??{id:u.id,kind:u.kind,team:u.team,damage:0,destroyed:false};r.damage+=amount;r.destroyed ||= u.hp<=0;g.report.assets[u.id]=r;}
export function missionScoreboard(g:Game){const rows=Object.values(g.report.assets);return {military:rows.filter(r=>!isInfrastructure(r)),infrastructure:rows.filter(isInfrastructure),panicGenerated:g.report.panicGenerated,peakPanic:g.report.peakPanic,affectedCenters:g.report.affectedCenters.length};}
export function validReport(r:MissionReport){return !!r&&[r.fromTime,r.panicGenerated,r.peakPanic].every(n=>Number.isFinite(n)&&n>=0)&&r.peakPanic<=100&&Array.isArray(r.affectedCenters)&&r.affectedCenters.every(x=>typeof x==='string')&&!!r.assets&&typeof r.assets==='object'&&!Array.isArray(r.assets)&&Object.values(r.assets).every(a=>Number.isInteger(a.id)&&!!SPECS[a.kind]&&['india','pakistan'].includes(a.team)&&Number.isFinite(a.damage)&&a.damage>=0&&typeof a.destroyed==='boolean');}
