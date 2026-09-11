import type {Game} from './engine.ts';
import type {Point} from './catalog.ts';
type Pose=Point&{heading?:number;id:number};
type Snapshot={duration:number;friends:Map<number,Pose>;contacts:Map<number,Pose>};
const history=new WeakMap<Game,Snapshot>();
export function captureMotion(g:Game,dt:number){history.set(g,{duration:dt,friends:new Map(g.units.filter(u=>u.team==='india').map(u=>[u.id,{id:u.id,x:u.x,y:u.y,heading:u.heading}])),contacts:new Map(Object.values(g.contacts.india).filter(c=>g.time-c.seen<1).map(c=>[c.id,{id:c.id,x:c.x,y:c.y,heading:c.heading}]))});}
/** Rendering only: blend known poses, never predict paths or read hidden enemies. */
export function renderPosition(g:Game,p:Pose,offset=0,enemy=false):Pose{const snapshot=history.get(g),previous=(enemy?snapshot?.contacts:snapshot?.friends)?.get(p.id);if(!g.running||!previous||!snapshot||enemy&&g.time-(g.contacts.india[p.id]?.seen??-Infinity)>1)return p;const t=Math.max(0,Math.min(1,offset/snapshot.duration)),a=previous.heading??p.heading??0,b=p.heading??a,turn=((b-a+540)%360)-180;return {...p,x:previous.x+(p.x-previous.x)*t,y:previous.y+(p.y-previous.y)*t,heading:a+turn*t};}

export function resetMotion(g:Game){history.delete(g);}
