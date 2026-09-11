import elevation from '../../public/assets/elevation.json' with {type:'json'};
import riverData from '../../public/assets/rivers.json' with {type:'json'};
import type {Point} from './catalog.ts';
export const TERRAIN_BOUNDS={x:-66,y:-33,width:1320,height:1188};
export const projectGeo=(p:number[]):Point=>({x:(p[0]-60)*33,y:(39-p[1])*33});
export function elevationAt(p:Point){const a=elevation as {width:number;height:number;heights:number[]};const x=Math.max(0,Math.min(a.width-1,(p.x+66)/1320*(a.width-1))),y=Math.max(0,Math.min(a.height-1,(p.y+33)/1188*(a.height-1)));const ix=Math.floor(x),iy=Math.floor(y),jx=Math.min(ix+1,a.width-1),jy=Math.min(iy+1,a.height-1),tx=x-ix,ty=y-iy;return (a.heights[iy*a.width+ix]*(1-tx)+a.heights[iy*a.width+jx]*tx)*(1-ty)+(a.heights[jy*a.width+ix]*(1-tx)+a.heights[jy*a.width+jx]*tx)*ty;}
export const terrainHeight=(p:Point)=>{const h=elevationAt(p);return h>0?h*.017:h*.0015;};
export const RIVERS=riverData.rivers.flatMap(r=>r.coordinates.map(line=>({name:r.name,points:line.map(projectGeo)})));
// Public river centre lines, simplified to game obstacles. Crossing widths and construction times are fictional.
export const BARRIER_SEGMENTS=RIVERS.filter(r=>['Indus','Chenab','Sutlej'].includes(r.name)).flatMap(r=>r.points.slice(1).map((b,i)=>({a:r.points[i],b,name:r.name}))).filter(s=>Math.min(s.a.x,s.b.x)<560&&Math.max(s.a.y,s.b.y)>185&&Math.min(s.a.y,s.b.y)<495);
export function segmentIntersection(a:Point,b:Point,c:Point,d:Point):Point|null{if(Math.max(a.x,b.x)<Math.min(c.x,d.x)||Math.min(a.x,b.x)>Math.max(c.x,d.x)||Math.max(a.y,b.y)<Math.min(c.y,d.y)||Math.min(a.y,b.y)>Math.max(c.y,d.y))return null;const ux=b.x-a.x,uy=b.y-a.y,vx=d.x-c.x,vy=d.y-c.y,den=ux*vy-uy*vx;if(Math.abs(den)<.00001)return null;const t=((c.x-a.x)*vy-(c.y-a.y)*vx)/den,q=((c.x-a.x)*uy-(c.y-a.y)*ux)/den;return t>=0&&t<=1&&q>=0&&q<=1?{x:a.x+t*ux,y:a.y+t*uy}:null;}
