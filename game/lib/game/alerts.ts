import type {Game,Unit,Point} from './engine.ts';

export type BattleAlert=Point&{
  id:number;unitId:number;name:string;time:number;firstTime:number;
  phase:'incoming'|'hit'|'lost'|'missed'|'intercepted';damage:number;attacks:number;readAt:number;
};
const priority={incoming:0,missed:1,intercepted:1,hit:2,lost:3};

/** Reports only the friendly victim's observed position; never an unseen attacker. */
export function battleAlert(g:Game,u:Unit,phase:BattleAlert['phase'],amount=0){
  if(u.team!=='india'||u.delivered)return;
  const previous=g.alerts.find(a=>a.unitId===u.id&&g.time-a.time<12);
  if(previous){
    previous.x=u.x;previous.y=u.y;previous.time=g.time;
    if(priority[phase]>=priority[previous.phase])previous.phase=phase;
    previous.damage+=amount;
    if(phase==='incoming')previous.attacks++;
  }else{
    g.alerts.unshift({id:++g.id,unitId:u.id,name:u.name,x:u.x,y:u.y,time:g.time,firstTime:g.time,phase,damage:amount,attacks:phase==='incoming'?1:0,readAt:-1});
    g.alerts=g.alerts.slice(0,40);
  }
}
export function recentAlerts(g:Game){return g.alerts.filter(a=>g.time-a.time<=90).sort((a,b)=>b.time-a.time||b.id-a.id);}
export function alertTitle(a:BattleAlert){return {incoming:'Incoming attack',hit:'Under fire',lost:'Formation lost',missed:'Attack evaded',intercepted:'Attack intercepted'}[a.phase];}
export function validAlerts(value:unknown):value is BattleAlert[]{
  return Array.isArray(value)&&value.length<=40&&value.every(a=>a&&typeof a.name==='string'&&a.name.length<200&&['incoming','hit','lost','missed','intercepted'].includes(a.phase)&&[a.id,a.unitId,a.x,a.y,a.time,a.firstTime,a.damage,a.attacks,a.readAt].every(Number.isFinite)&&a.damage>=0&&a.attacks>=0)&&new Set(value.map(a=>a.id)).size===value.length;
}
