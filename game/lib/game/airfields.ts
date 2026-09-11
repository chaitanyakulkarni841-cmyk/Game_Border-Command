import type {Team,Point} from './catalog.ts';
// Invented installations placed within generalized geography. No real military-site dataset.
export const ADDITIONAL_AIRFIELDS:(Point&{team:Team;name:string})[]=[
 {team:'india',name:'Juniper airfield',x:923,y:545},{team:'india',name:'Quartz airfield',x:599,y:951},
 {team:'india',name:'Palisade airfield',x:761,y:690},{team:'india',name:'Amber airfield',x:788,y:458},
 {team:'india',name:'Saffron airfield',x:626,y:806},{team:'india',name:'Citadel airfield',x:950,y:400},
 {team:'india',name:'Orchid airfield',x:545,y:255},{team:'india',name:'Aurelia airfield',x:734,y:574},
 {team:'india',name:'Beacon airfield',x:545,y:864},
 {team:'pakistan',name:'Granite airfield',x:135,y:357},{team:'pakistan',name:'Onyx airfield',x:243,y:299},
 {team:'pakistan',name:'Dune airfield',x:216,y:386},{team:'pakistan',name:'Mica airfield',x:378,y:328},
 {team:'pakistan',name:'Basalt airfield',x:162,y:415},{team:'pakistan',name:'Flint airfield',x:297,y:270},
 {team:'pakistan',name:'Ochre airfield',x:189,y:328},{team:'pakistan',name:'Marl airfield',x:243,y:415},
 {team:'pakistan',name:'Topaz airfield',x:189,y:357}
];
