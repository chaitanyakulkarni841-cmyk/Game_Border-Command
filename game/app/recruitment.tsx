'use client';
import {Plus,MapPin} from 'lucide-react';
import {SPECS} from '@/lib/game/engine';
import type {Kind} from '@/lib/game/engine';
import {UnitSprite} from './expansion';
export function RecruitCard({kind,disabled,placing,onPlace,onRecruit}:{kind:Kind;disabled:boolean;placing:boolean;onPlace:()=>void;onRecruit:()=>void}){const s=SPECS[kind];return <div className={`recruit-card ${placing?'selected':''}`}><div className="recruit-summary"><svg viewBox="-30 -30 60 60" aria-hidden="true"><UnitSprite kind={kind}/></svg><div><strong>{s.name}</strong><span>{s.role}</span></div><b>{s.cost}</b></div><div className="recruit-actions"><button disabled={disabled} onClick={onRecruit}><Plus size={15}/>Quick deploy</button><button disabled={disabled} onClick={onPlace}><MapPin size={15}/>Place on map</button></div></div>;}
