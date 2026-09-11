import {LAND} from './land.ts';
import type {Point,Domain} from './catalog.ts';
export const distance=(a:Point,b:Point)=>Math.hypot(a.x-b.x,a.y-b.y);
export function inPolygon(p:Point,poly:Point[]){let yes=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a.y>p.y)!==(b.y>p.y)&&p.x<(b.x-a.x)*(p.y-a.y)/(b.y-a.y)+a.x)yes=!yes;}return yes;}
const landBounds=LAND.map(poly=>({poly,minX:Math.min(...poly.map(p=>p.x)),maxX:Math.max(...poly.map(p=>p.x)),minY:Math.min(...poly.map(p=>p.y)),maxY:Math.max(...poly.map(p=>p.y))}));
export const isLand=(p:Point)=>landBounds.some(b=>p.x>=b.minX&&p.x<=b.maxX&&p.y>=b.minY&&p.y<=b.maxY&&inPolygon(p,b.poly));
export const within=(p:Point)=>p.x>=-66&&p.x<=1254&&p.y>=-33&&p.y<=1155;
export const valid=(p:Point,domain:Domain)=>within(p)&&(domain==='air'||(domain==='land'?isLand(p):!isLand(p)));
const cache=new Map<string,boolean>();
function allowed(x:number,y:number,d:Domain){const key=`${x},${y},${d}`;if(!cache.has(key))cache.set(key,valid({x,y},d));return cache.get(key)!;}
export function straight(a:Point,b:Point,d:Domain,edge?:(a:Point,b:Point)=>boolean){if(edge&&!edge(a,b))return false;const steps=Math.ceil(distance(a,b)/8);for(let i=1;i<=steps;i++){if(!valid({x:a.x+(b.x-a.x)*i/steps,y:a.y+(b.y-a.y)*i/steps},d))return false;}return true;}
export function route(a:Point,b:Point,d:Domain,edge?:(a:Point,b:Point)=>boolean):Point[]|null{if(!valid(b,d))return null;if(d==='air'||straight(a,b,d,edge))return[{...b}];const step=18,key=(p:Point)=>`${p.x},${p.y}`,round=(p:Point)=>({x:Math.round(p.x/step)*step,y:Math.round(p.y/step)*step});const center=round(a),end=round(b);const open:Point[]=[],cost=new Map<string,number>(),prev=new Map<string,Point>();for(let dx=-2;dx<=2;dx++)for(let dy=-2;dy<=2;dy++){const p={x:center.x+dx*step,y:center.y+dy*step};if(allowed(p.x,p.y,d)&&straight(a,p,d,edge)){open.push(p);cost.set(key(p),distance(a,p));}}let count=0;while(open.length&&count++<6000){open.sort((p,q)=>(cost.get(key(p))!+distance(p,end))-(cost.get(key(q))!+distance(q,end)));const p=open.shift()!;if(distance(p,end)<step*1.5&&straight(p,b,d,edge)){const out=[b,p];let cur=p;while(prev.has(key(cur))){cur=prev.get(key(cur))!;out.push(cur);}out.reverse();return out;}for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]){const q={x:p.x+dx*step,y:p.y+dy*step};if(!allowed(q.x,q.y,d)||!straight(p,q,d,edge))continue;const v=cost.get(key(p))!+distance(p,q);if(v<(cost.get(key(q))??Infinity)){cost.set(key(q),v);prev.set(key(q),p);if(!open.some(n=>key(n)===key(q)))open.push(q);}}}return null;}

/** Deterministic, bounded shoreline repair for saves made with earlier coastlines. */
export function nearestNavigable(p:Point,domain:Domain):Point|null{if(valid(p,domain))return {...p};for(let radius=2;radius<=120;radius+=2)for(let i=0;i<48;i++){const a=i*Math.PI/24,q={x:p.x+Math.cos(a)*radius,y:p.y+Math.sin(a)*radius};if(valid(q,domain))return q;}return null;}
