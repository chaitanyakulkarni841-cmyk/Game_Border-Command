import boundaries from '../../public/assets/disputed-boundaries.json' with {type:'json'};
import regions from '../../public/assets/india-regions.json' with {type:'json'};
import outline from '../../public/assets/india-outline.json' with {type:'json'};
import {projectGeo,elevationAt,TERRAIN_BOUNDS} from './terrain.ts';
export const DISPUTED_BOUNDARIES=boundaries.boundaries.flatMap(b=>b.coordinates.map((line,i)=>({id:b.id+'-'+i,kind:b.kind,name:b.name,points:line.map(projectGeo)})));
export const REGION_LABELS=regions.features.map(f=>({name:f.properties.name,...projectGeo(f.properties.label)}));
const polygons=outline.geometry.type==='Polygon'?[outline.geometry.coordinates]:outline.geometry.coordinates;
export const INDIA_POLYGONS=(polygons as number[][][][]).map(p=>p[0].map(projectGeo));
// These cells expose exactly the same elevation thresholds used by ground movement.
export const HURDLES=Array.from({length:66*60},(_,i)=>({x:TERRAIN_BOUNDS.x+i%66*20,y:TERRAIN_BOUNDS.y+Math.floor(i/66)*20})).map(p=>({...p,elevation:elevationAt({x:p.x+10,y:p.y+10})})).filter(p=>p.elevation>2500);

// Clip independent public boundary segments to the bundled map rectangle.
export function clipPolyline(points:{x:number;y:number}[]){const out:{x:number;y:number}[][]=[];let current:{x:number;y:number}[]=[];const b=TERRAIN_BOUNDS;for(let i=1;i<points.length;i++){const a=points[i-1],z=points[i],dx=z.x-a.x,dy=z.y-a.y;let low=0,high=1,ok=true;for(const [v,q]of [[-dx,a.x-b.x],[dx,b.x+b.width-a.x],[-dy,a.y-b.y],[dy,b.y+b.height-a.y]]){if(v===0){if(q<0)ok=false;}else{const r=q/v;if(v<0)low=Math.max(low,r);else high=Math.min(high,r);}}if(!ok||low>high){if(current.length>1)out.push(current);current=[];continue;}const start={x:a.x+low*dx,y:a.y+low*dy},end={x:a.x+high*dx,y:a.y+high*dy};if(current.length&&Math.hypot(current.at(-1)!.x-start.x,current.at(-1)!.y-start.y)>.001){out.push(current);current=[];}if(!current.length)current.push(start);current.push(end);}if(current.length>1)out.push(current);return out;}
