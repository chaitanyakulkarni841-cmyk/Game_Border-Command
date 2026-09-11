export type Team='india'|'pakistan';
export type Point={x:number;y:number};
export type Branch='army'|'air'|'navy'|'build';
export type Domain='land'|'air'|'sea';
export type Spec={name:string;role:string;branch:Branch;domain:Domain;cost:number;hp:number;ammo:number;range:number;vision:number;speed:number;damage:number;cooldown:number;air:boolean;sea:boolean;slots:number;structure:boolean;targets:Domain[];members:number;formation:string;income:number;missile:boolean;capture:boolean;art:string};
const spec=(s:Partial<Spec>&Pick<Spec,'name'|'role'>):Spec=>({branch:'army',domain:'land',cost:150,hp:120,ammo:12,range:60,vision:100,speed:6,damage:25,cooldown:5,air:false,sea:false,slots:1,structure:false,targets:['land'],members:1,formation:s.sea?'ship':s.structure?'installation':'unit',income:0,missile:false,capture:false,art:'army',...s});
export const SPECS={
 s400:spec({name:'S-400',role:'Sector air & vehicle defence',cost:280,hp:150,ammo:12,range:130,vision:155,speed:4,damage:38,cooldown:5,slots:2,targets:['air','land'],members:4,formation:'launchers'}),
 akash:spec({name:'Akash',role:'Mobile air & vehicle defence',cost:150,hp:110,ammo:10,range:78,vision:105,speed:5,damage:28,cooldown:4,targets:['air','land'],members:4,formation:'launchers'}),
 rafale:spec({name:'Rafale',role:'Multirole squadron',branch:'air',domain:'air',air:true,cost:230,hp:110,ammo:8,range:46,vision:115,speed:18,damage:30,cooldown:4,targets:['land','air','sea'],members:4,formation:'aircraft',art:'air'}),
 su30:spec({name:'Su-30MKI',role:'Heavy fighter squadron',branch:'air',domain:'air',air:true,cost:270,hp:150,ammo:10,range:50,vision:110,speed:15,damage:33,cooldown:5,targets:['land','air','sea'],members:4,formation:'aircraft',art:'air'}),
 tejas:spec({name:'Tejas',role:'Light fighter squadron',branch:'air',domain:'air',air:true,cost:170,hp:85,ammo:6,range:40,vision:100,speed:21,damage:24,cooldown:3.5,targets:['air','land'],members:4,formation:'aircraft',art:'air'}),
 drone:spec({name:'Scout UAV',role:'Unarmed reconnaissance',branch:'air',domain:'air',air:true,cost:90,hp:55,ammo:0,range:0,vision:195,speed:12,damage:0,cooldown:0,targets:[],members:2,formation:'drones',art:'air'}),
 armeddrone:spec({name:'Strike UAV wing',role:'Light ground & naval attack',branch:'air',domain:'air',air:true,cost:165,hp:65,ammo:4,range:52,vision:155,speed:13,damage:27,cooldown:7,targets:['land','sea'],members:3,formation:'drones',art:'air'}),
 interceptordrone:spec({name:'Interceptor drone swarm',role:'Drone interception only',branch:'air',domain:'air',air:true,cost:125,hp:70,ammo:12,range:48,vision:125,speed:19,damage:24,cooldown:3,targets:['air'],members:8,formation:'drones',art:'air'}),
 counterdrone:spec({name:'Counter-drone vehicle',role:'Drone disruption & point defence',cost:160,hp:130,ammo:18,range:75,vision:135,speed:7,damage:20,cooldown:3,targets:['air'],members:2,formation:'vehicles'}),
 bridgelayer:spec({name:'River-crossing engineers',role:'Construct pontoon crossings',cost:180,hp:160,ammo:0,range:0,vision:85,speed:7,damage:0,targets:[],members:3,formation:'vehicles',capture:true}),
 radar:spec({name:'Radar station',role:'Detection & identification',cost:120,hp:90,ammo:0,range:0,vision:195,speed:4,damage:0,cooldown:0,targets:[]}),
 logistics:spec({name:'Supply column',role:'Mobile resupply support',cost:100,hp:110,ammo:0,range:110,vision:65,speed:8,damage:0,cooldown:0,targets:[],members:6,formation:'trucks'}),
 infantry:spec({name:'Infantry company',role:'Capture & hold sectors',cost:110,hp:180,ammo:24,range:38,vision:90,speed:7,damage:20,cooldown:3.5,members:80,formation:'troops',capture:true}),
 t90:spec({name:'T-90 formation',role:'Mobile heavy armour',cost:250,hp:260,ammo:16,range:58,vision:100,speed:9,damage:40,cooldown:5,members:6,formation:'tanks',capture:true}),
 arjun:spec({name:'Arjun formation',role:'Heavy assault armour',cost:290,hp:320,ammo:14,range:62,vision:90,speed:6,damage:45,cooldown:6,members:6,formation:'tanks',capture:true}),
 bmp:spec({name:'Mechanized infantry',role:'Fast sector occupation',cost:180,hp:190,ammo:18,range:43,vision:110,speed:11,damage:26,cooldown:4,members:8,formation:'vehicles',capture:true}),
 artillery:spec({name:'K9-inspired battery',role:'Long-range ground support',cost:240,hp:120,ammo:10,range:125,vision:70,speed:5,damage:48,cooldown:10,members:4,formation:'guns'}),
 engineer:spec({name:'Combat engineers',role:'Establish forward bases',cost:95,hp:100,ammo:6,range:28,vision:85,speed:8,damage:10,cooldown:5,members:24,formation:'engineers',capture:true}),
 brahmos:spec({name:'BrahMos-inspired battery',role:'Player-controlled cruise strike',cost:440,hp:140,ammo:3,range:410,vision:85,speed:5,damage:190,cooldown:24,targets:['land','sea'],missile:true,members:3,formation:'launchers'}),
 destroyer:spec({name:'Visakhapatnam-class',role:'Destroyer group',branch:'navy',domain:'sea',sea:true,cost:380,hp:390,ammo:22,range:100,vision:160,speed:9,damage:39,cooldown:5,targets:['sea','air'],art:'navy',capture:true}),
 frigate:spec({name:'Shivalik-class',role:'Frigate escort',branch:'navy',domain:'sea',sea:true,cost:270,hp:270,ammo:18,range:85,vision:145,speed:11,damage:28,cooldown:4,targets:['sea','air'],art:'navy',capture:true}),
 submarine:spec({name:'Kalvari-class',role:'Low-visibility sea control',branch:'navy',domain:'sea',sea:true,cost:310,hp:180,ammo:8,range:72,vision:115,speed:7,damage:65,cooldown:9,targets:['sea'],art:'navy',capture:true}),
 carrier:spec({name:'Vikrant-inspired carrier',role:'Mobile aircraft service',branch:'navy',domain:'sea',sea:true,cost:680,hp:650,ammo:20,range:75,vision:160,speed:6,damage:22,cooldown:5,targets:['air'],art:'navy',capture:true}),
 supplyship:spec({name:'Fleet replenishment ship',role:'Naval repairs & resupply',branch:'navy',domain:'sea',sea:true,cost:180,hp:210,ammo:0,range:150,vision:80,speed:9,damage:0,targets:[],art:'navy'}),
 base:spec({name:'Forward command base',role:'Income & deployment hub',branch:'build',cost:450,hp:500,ammo:0,range:0,vision:120,speed:2,damage:0,cooldown:0,structure:true,targets:[],income:.65,art:'build'}),
 airfield:spec({name:'Field airfield',role:'Squadron launch & rearm',branch:'build',cost:380,hp:370,ammo:0,range:0,vision:110,speed:0,damage:0,structure:true,targets:[],income:.25,art:'air'}),
 depot:spec({name:'Supply depot',role:'Extends resupply coverage',branch:'build',cost:180,hp:240,ammo:0,range:190,vision:75,speed:0,damage:0,structure:true,targets:[],art:'build'}),
 bridge:spec({name:'Logistics bridge',role:'Fictional military river crossing',branch:'build',cost:120,hp:220,ammo:0,range:0,vision:0,speed:0,damage:0,structure:true,targets:[],art:'build'}),
 industry:spec({name:'Resource works',role:'+1.5 credits / second',branch:'build',cost:320,hp:260,ammo:0,range:0,vision:65,speed:0,damage:0,structure:true,targets:[],income:1.5,art:'build'}),
 harbor:spec({name:'Fleet anchorage',role:'Naval deployment & supply',branch:'build',domain:'sea',sea:true,cost:350,hp:480,ammo:0,range:180,vision:130,speed:0,damage:0,structure:true,targets:[],income:.4,art:'navy'}),
 jf17:spec({name:'JF-17',role:'Multirole squadron',branch:'air',domain:'air',air:true,cost:160,hp:90,ammo:7,range:42,vision:110,speed:16,damage:25,cooldown:5,targets:['air','land','sea'],members:4,formation:'aircraft',art:'air'}),
 f16:spec({name:'F-16',role:'Multirole squadron',branch:'air',domain:'air',air:true,cost:220,hp:110,ammo:8,range:46,vision:115,speed:18,damage:29,cooldown:4,targets:['air','land','sea'],members:4,formation:'aircraft',art:'air'}),
 j10:spec({name:'J-10C',role:'Multirole squadron',branch:'air',domain:'air',air:true,cost:230,hp:115,ammo:8,range:48,vision:120,speed:19,damage:30,cooldown:4,targets:['air','land','sea'],members:4,formation:'aircraft',art:'air'}),
 hq9:spec({name:'HQ-9/P',role:'Long-range air defence',cost:260,hp:140,ammo:12,range:115,vision:145,speed:4,damage:32,cooldown:6,slots:2,targets:['air'],members:4,formation:'launchers'}),
 alkhalid:spec({name:'Al-Khalid formation',role:'Armoured formation',cost:240,hp:250,ammo:16,range:55,vision:95,speed:9,damage:37,cooldown:5,members:6,formation:'tanks',capture:true}),
 type054:spec({name:'Tughril-class',role:'Frigate formation',branch:'navy',domain:'sea',sea:true,cost:260,hp:280,ammo:18,range:90,vision:145,speed:10,damage:32,cooldown:5,targets:['sea','air'],art:'navy',capture:true}),
 agosta:spec({name:'Agosta-inspired submarine',role:'Low-visibility sea control',branch:'navy',domain:'sea',sea:true,cost:280,hp:175,ammo:8,range:68,vision:105,speed:7,damage:59,cooldown:9,targets:['sea'],art:'navy',capture:true})
};
export type Kind=keyof typeof SPECS;
export const ROSTER:Kind[]=['s400','akash','rafale','su30','tejas','drone','armeddrone','interceptordrone','counterdrone','bridgelayer','infantry','t90','arjun','bmp','artillery','engineer','brahmos','radar','logistics','destroyer','frigate','submarine','carrier','supplyship','base','airfield','depot','industry','harbor'];
export type Scenario='shield'|'skies'|'campaign'|'armor'|'seacontrol'|'convoy'|'harborwatch'|'runway'|'missileraid'|'economy'|'recon'|'monsoon'|'laststand'|'joint'|'sandbox';
export type ScenarioInfo={name:string;tag:string;duration:number;description:string;focus:Branch|'joint';goal:number;mode:'survive'|'control'|'destroy'|'escort'|'economy'|'recon'|'joint'|'sandbox';weather:'clear'|'storm'|'night';intensity:number};
const scenario=(s:Partial<ScenarioInfo>&Pick<ScenarioInfo,'name'|'description'>):ScenarioInfo=>({tag:'DEFEND',duration:600,focus:'joint',goal:0,mode:'survive',weather:'clear',intensity:1,...s});
export const SCENARIOS:Record<Scenario,ScenarioInfo>={
shield:scenario({name:'Shield',tag:'AIR DEFENCE',description:'Keep at least two of the three original command posts operational for 10 minutes.',focus:'air'}),
skies:scenario({name:'Contested Skies',tag:'AIR SUPERIORITY',duration:720,description:'Patrol three airspace sectors. Reach 360 control points, or lead at the deadline.',mode:'control',focus:'air',goal:360}),
campaign:scenario({name:'Command Campaign',tag:'CAMPAIGN',duration:900,description:'Discover and disable all three original opposing command posts. Preserve one of yours.',mode:'destroy'}),
armor:scenario({name:'Desert Spear',tag:'LAND OFFENSIVE',duration:660,description:'Capture the three desert sectors with ground forces and hold them together for 45 seconds.',mode:'control',focus:'army',goal:45,intensity:.8}),
seacontrol:scenario({name:'Ocean Sentinel',tag:'NAVAL CONTROL',duration:660,description:'Control three Arabian Sea sectors with warships. Reach 300 points, or lead at the deadline.',mode:'control',focus:'navy',goal:300}),
convoy:scenario({name:'Supply Corridor',tag:'GROUND ESCORT',duration:720,description:'Escort at least two of the three marked supply columns to the southern rally zone.',mode:'escort',focus:'army',goal:2,intensity:.8}),
harborwatch:scenario({name:'Harbor Watch',tag:'CONVOY AT SEA',duration:720,description:'Sail both marked replenishment ships into the offshore rendezvous zone. Keep both alive.',mode:'escort',focus:'navy',goal:2,intensity:.8}),
runway:scenario({name:'Runway Denial',tag:'AIRFIELD RAID',duration:780,description:'Locate and disable three designated fictional opposing airfields. Keep a command post operational.',mode:'destroy',focus:'air'}),
missileraid:scenario({name:'Distant Thunder',tag:'PRECISION STRIKE',duration:720,description:'Scout and disable the two marked fictional military installations. Cruise batteries require manual launch orders.',mode:'destroy',focus:'army',intensity:.65}),
economy:scenario({name:'Iron Economy',tag:'BASE BUILDING',duration:840,description:'Earn 2,000 credits during the round and complete two resource works plus one additional command base.',mode:'economy',focus:'build',goal:2000,intensity:.55}),
recon:scenario({name:'Night Watch',tag:'RECONNAISSANCE',duration:600,description:'Identify all three marked enemy military sites under reduced night visibility. Keep a command post alive.',mode:'recon',focus:'air',goal:3,weather:'night',intensity:.6}),
monsoon:scenario({name:'Monsoon Shield',tag:'EXTREME WEATHER',duration:600,description:'Preserve two original command posts through ten minutes of reduced visibility and slower air movement.',weather:'storm',intensity:.85}),
laststand:scenario({name:'Last Light',tag:'SURVIVAL',duration:480,description:'One command post remains. Hold it for eight minutes against six increasingly strong waves.',focus:'army',intensity:.8}),
joint:scenario({name:'Three Fronts',tag:'JOINT CAMPAIGN',duration:900,description:'Hold two land sectors, disable two marked enemy airfields, and retain at least one warship.',mode:'joint',goal:2,intensity:.8}),
sandbox:scenario({name:'Open Command',tag:'SANDBOX',duration:1800,description:'Build an army, expand your bases, and control land, air and sea. End the exercise when you choose.',mode:'sandbox',intensity:.7})};
export type Settings={scenario:Scenario;difficulty:'easy'|'normal'|'hard'|'custom';resources:number;activity:number;damage:number;fog:boolean;forces:number;seed:number;forceScale:number};
export const DEFAULT:Settings={scenario:'shield',difficulty:'normal',resources:1,activity:1,damage:1,fog:true,forces:2,seed:841,forceScale:1};
