import type {Game,Point,Missile} from './engine.ts';
import {renderPosition} from './motion.ts';
import {SPECS} from './catalog.ts';
import {terrainHeight} from './terrain.ts';
export type FollowTarget={kind:'units';ids:number[]}|{kind:'missile';id:number};
export function flightPosition(m:Missile,offset=0):Point&{altitude:number}{const t=Math.min(1,(m.age+offset)/m.duration);const p={x:m.from.x+(m.to.x-m.from.x)*t,y:m.from.y+(m.to.y-m.from.y)*t};const base=Math.max(0,terrainHeight(m.from))*(1-t)+Math.max(0,terrainHeight(m.to))*t;return {...p,altitude:base+Math.sin(Math.PI*t)*(m.profile==='cruise'?38:m.profile==='shell'?46:20)+3};}
export function followPosition(g:Game,f:FollowTarget|null,offset=0):(Point&{altitude:number;name:string})|null{if(!f)return null;if(f.kind==='missile'){const m=g.missiles.find(m=>m.id===f.id&&m.team==='india');return m?{...flightPosition(m,offset),name:m.source+' · weapon camera'}:null;}const us=g.units.filter(u=>f.ids.includes(u.id)&&u.team==='india'&&u.hp>0&&!u.delivered);if(!us.length)return null;const poses=us.map(u=>renderPosition(g,u,offset));const p={x:poses.reduce((n,u)=>n+u.x,0)/us.length,y:poses.reduce((n,u)=>n+u.y,0)/us.length};return {...p,altitude:Math.max(0,terrainHeight(p))+(SPECS[us[0].kind].air?22:3),name:us.length===1?us[0].name:`${us.length} formations · group camera`};}
