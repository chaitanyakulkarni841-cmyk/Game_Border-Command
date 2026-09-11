import type {Point,Unit} from './engine.ts';
import {SPECS} from './catalog.ts';
export type CommandRegion='north'|'west'|'front'|'south'|'sea'|'all';
export const COMMANDS:Record<CommandRegion,{name:string;short:string;description:string;center:Point;view:{x:number;y:number;w:number;h:number}}>={
 north:{name:'Northern Command',short:'North',description:'Northern approaches · mountain passes and river gates',center:{x:575,y:285},view:{x:440,y:135,w:270,h:285}},
 west:{name:'Western Command',short:'West',description:'Central command posts · army and air support',center:{x:545,y:430},view:{x:465,y:350,w:165,h:170}},
 front:{name:'Western Front',short:'Front',description:'Connected sectors · advance and hold territory',center:{x:465,y:425},view:{x:345,y:310,w:260,h:245}},
 south:{name:'Southern Command',short:'South',description:'Southern sectors · bases and reinforcement routes',center:{x:535,y:560},view:{x:435,y:475,w:215,h:220}},
 sea:{name:'Maritime Command',short:'Sea',description:'Arabian Sea · fleet movement and supply',center:{x:385,y:775},view:{x:255,y:650,w:285,h:300}},
 all:{name:'All India',short:'All India',description:'Full country overview · disputed boundaries are marked',center:{x:605,y:560},view:{x:-75,y:-45,w:1385,h:1220}}
};
export function inCommand(u:Pick<Unit,'kind'|'x'|'y'>,region:CommandRegion){if(region==='all')return true;if(region==='sea')return SPECS[u.kind].sea;if(SPECS[u.kind].sea)return false;if(region==='north')return u.y<345;if(region==='west')return u.y>=345&&u.y<495;if(region==='south')return u.y>=495;if(region==='front')return u.x>=330&&u.x<=525&&u.y>=270&&u.y<=610;return false;}
