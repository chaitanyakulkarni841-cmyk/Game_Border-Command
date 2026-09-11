'use client';
import {useState} from 'react';
import {BellRing,LocateFixed,Plus,ChevronDown,ArrowLeft,ShieldCheck} from 'lucide-react';
import type {Game} from '@/lib/game/engine';
import {recentAlerts,alertTitle} from '@/lib/game/alerts';
import type {BattleAlert} from '@/lib/game/alerts';

export function BattleAlerts({g,onFocus,onRespond,onReturn,canReturn}:{g:Game;onFocus:(a:BattleAlert)=>void;onRespond:(a:BattleAlert)=>void;onReturn:()=>void;canReturn:boolean}){
  const [expanded,setExpanded]=useState(false);
  const alerts=recentAlerts(g),latest=alerts[0],unread=alerts.filter(a=>a.time>a.readAt).length;
  return <section className={`battle-alerts ${latest?'has-incidents':''}`} aria-label="Battle alerts">
    <div className="battle-alert-status" role="status" aria-live="polite">{latest?<><BellRing size={18}/><span>{alertTitle(latest)}<strong>{latest.name}</strong></span></>:<><ShieldCheck size={18}/><span>Local defence active<strong>Ready combat units respond to nearby detected threats</strong></span></>}</div>
    {latest&&<><button className="alert-view" onClick={()=>onFocus(latest)}><LocateFixed size={16}/>View attack <kbd>J</kbd></button><button onClick={()=>{onRespond(latest);setExpanded(false);}}><Plus size={16}/>Respond</button><button className="alert-history" aria-expanded={expanded} aria-label={`Show recent attacks, ${unread} unread`} onClick={()=>setExpanded(!expanded)}>{unread||alerts.length}<ChevronDown size={16}/></button></>}
    {canReturn&&<button className="alert-return" onClick={onReturn}><ArrowLeft size={16}/><span>Previous area</span></button>}
    {expanded&&latest&&<div className="attack-history"><header><strong>Recent attacks</strong><small>Simulation time · grouped by formation</small></header>{alerts.slice(0,8).map(a=><div className={`attack-history-row ${a.time>a.readAt?'unread':''}`} key={a.id}><button onClick={()=>{onFocus(a);setExpanded(false);}}><LocateFixed size={18}/><span><strong>{a.name}</strong><small>{alertTitle(a)} · {Math.ceil(a.damage)} damage · {Math.floor(g.time-a.time)}s ago</small></span></button><button aria-label={`Respond to attack on ${a.name}`} onClick={()=>{onRespond(a);setExpanded(false);}}><Plus size={18}/></button></div>)}</div>}
  </section>;
}

export function AttackMarkers({g,size,onFocus}:{g:Game;size:number;onFocus:(a:BattleAlert)=>void}){
  return <g className="attack-markers">{recentAlerts(g).slice(0,8).map(a=><g key={a.id} transform={`translate(${a.x} ${a.y}) scale(${size})`}>
    <circle className={`attack-pulse ${g.running?'is-running':''}`} r="29" fill="none" stroke="#ffb17f" strokeWidth="2" pointerEvents="none"/>
    <g transform="translate(32 -32)" className="attack-locator" role="button" aria-label={`${alertTitle(a)} at ${a.name}. View attack.`} tabIndex={0} onPointerDown={e=>e.stopPropagation()} onClick={e=>{e.stopPropagation();onFocus(a);}} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();onFocus(a);}}}>
      <circle r="17" fill="#542e25" stroke="#ffbb83" strokeWidth="1.5"/><text textAnchor="middle" y="6" fill="#ffe4be" fontSize="19" fontWeight="700">!</text><title>{a.name} · {alertTitle(a)} · click to inspect</title>
    </g>
  </g>)}</g>;
}
