import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

// Usage: node templates/generate-unit-catalog.mjs [portfolio-root] [specs-output]
// Install game dependencies first. Optional source override: BORDER_COMMAND_SOURCE.
// Reads the actual TypeScript catalog through Node 24's built-in type stripping.
const here=path.dirname(fileURLToPath(import.meta.url));
const portfolio=path.resolve(process.argv[2]??path.join(here,'..'));
const root=path.resolve(process.env.BORDER_COMMAND_SOURCE??path.join(portfolio,'game'));
const out=path.resolve(process.argv[3]??path.join(portfolio,'specs'));
const iconOut=path.join(portfolio,'images');
const read=rel=>fs.readFile(path.join(root,rel),'utf8');
const {SPECS,ROSTER}=await import(pathToFileURL(path.join(root,'lib/game/catalog.ts')));
const {unitArt}=await import(pathToFileURL(path.join(root,'lib/game/unit-art.ts')));
const {WORLD_LINEAR_SCALE,MOVEMENT_MULTIPLIER,movementInMapUnits,tacticalDistance,engagementDistance,ENGAGEMENT_RANGE_MULTIPLIER}=await import(pathToFileURL(path.join(root,'lib/game/world.ts')));
const {coverageMultiplier}=await import(pathToFileURL(path.join(root,'lib/game/maintenance.ts')));
const [engine,game]=await Promise.all([read('lib/game/engine.ts'),read('app/game.tsx')]);
const enemyInitial=new Set([...engine.matchAll(/add\(g,'([^']+)','pakistan'/g)].map(m=>m[1]));
const choices=engine.match(/let choices:Kind\[\]=([\s\S]*?);const kind=/)?.[1];
if(!choices)throw new Error('Could not identify current AI reinforcement choices. Review availability extraction.');
const enemyWaves=new Set([...choices.matchAll(/'([^']+)'/g)].map(m=>m[1]).filter(k=>k in SPECS));
const iconsBlock=game.match(/const ICONS:[^=]+=(\{[^;]+\});/)?.[1];
if(!iconsBlock)throw new Error('Could not identify current UI icon map.');
const glyphs=Object.fromEntries([...iconsBlock.matchAll(/([a-z0-9]+):([A-Za-z0-9]+)/g)].map(m=>[m[1],m[2]]));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const md=s=>String(s).replaceAll('|','\\|').replaceAll('\n',' ');
const fixed=n=>Number(n.toFixed(6));
const pretty=n=>Number(n.toFixed(3)).toString();
const branchNames={army:'Army',air:'Air',navy:'Navy',build:'Construction and support installations'};
const side=u=>u.id==='bridge'?'Both sides · crossing engineering':u.availability.playerDeployable?(u.availability.opposingAI?'Both sides':'Player'): 'Opposing AI';
await fs.mkdir(path.join(iconOut,'icons/glyph'),{recursive:true});
await fs.mkdir(path.join(iconOut,'icons/atlas'),{recursive:true});
const atlasInfo={};
for(const name of ['unit-atlas.png','new-units.png']){
  const b=await fs.readFile(path.join(root,'public/assets',name));
  if(b.subarray(1,4).toString()!=='PNG')throw new Error('Expected a PNG atlas: '+name);
  atlasInfo[name]={width:b.readUInt32BE(16),height:b.readUInt32BE(20),bytes:b.length,sha256:createHash('sha256').update(b).digest('hex')};
}
const units=[];
for(const [id,spec] of Object.entries(SPECS)){
  const source=unitArt(id),glyph=glyphs[id];
  if(!glyph)throw new Error('Missing UI glyph for '+id);
  const kebab=glyph.replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase();
  const {__iconNode:nodes}=await import(pathToFileURL(path.join(root,'node_modules/lucide-react/dist/esm/icons',kebab+'.mjs')));
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48" role="img" aria-label="${esc(spec.name)}"><title>${esc(spec.name)} — ${esc(glyph)}</title><rect width="32" height="32" rx="7" fill="#16332c"/><g transform="translate(4 4)" fill="none" stroke="#e8d9a5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${nodes.map(([tag,attrs])=>`<${tag} ${Object.entries(attrs).filter(([k])=>k!=='key').map(([k,v])=>`${k}="${esc(v)}"`).join(' ')}/>`).join('')}</g></svg>\n`;
  await fs.writeFile(path.join(iconOut,'icons/glyph',id+'.svg'),svg);
  let atlas=null;
  if(source){
    const filename=path.basename(source.path),dims=atlasInfo[filename];
    atlas={sourcePath:'game/public'+source.path,filename,atlasWidth:dims.width,atlasHeight:dims.height,x:source.x,y:source.y,width:source.width,height:source.height,correctionDegrees:source.correction,wrapper:'../images/icons/atlas/'+id+'.svg',wrapperUsesExternalImage:true};
    const wrapper=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${source.width} ${source.height}" width="96" height="96" role="img" aria-label="${esc(spec.name)}"><title>${esc(spec.name)} — source atlas crop, correction ${source.correction} degrees</title><defs><clipPath id="crop"><rect width="${source.width}" height="${source.height}"/></clipPath></defs><g clip-path="url(#crop)"><g transform="rotate(${source.correction} ${source.width/2} ${source.height/2})"><image href="../../../game/public/assets/${filename}" x="${-source.x}" y="${-source.y}" width="${dims.width}" height="${dims.height}"/></g></g></svg>\n`;
    await fs.writeFile(path.join(iconOut,'icons/atlas',id+'.svg'),wrapper);
  }
  const infrastructure=['industry','bridge'].includes(id),player=ROSTER.includes(id),initial=enemyInitial.has(id)||infrastructure,waves=enemyWaves.has(id),enemy=initial||waves;
  const notes=[];
  if(coverageMultiplier(id)>1)notes.push('Detection and engagement radii are multiplied by '+coverageMultiplier(id)+' relative to v0.6; the base fields remain raw catalog values.');
  if(['s400','akash'].includes(id))notes.push('Fictional land engagement is restricted to armed, non-structure ground units. This is a gameplay capability, not a claim about real equipment.');
  if(id==='bridge')notes.push('Not available in the deployment tray. Existing open crossings receive assets; engineers build or rebuild bridges. Destruction closes the crossing.');
  if(id==='industry')notes.push('Scenario military works are present for both sides in sectors; these starting works generate no income and do not satisfy economy construction goals. Player-built works retain their listed income.');
  if(['interceptordrone','counterdrone'].includes(id))notes.push('Despite the air target-domain flag, canHit restricts this unit to drone, armeddrone and interceptordrone targets.');
  if(['s400','hq9'].includes(id))notes.push('Without an operational same-team radar within 230 map units, effective range is multiplied by 0.78.');
  if(spec.missile)notes.push('Manual cruise launch: raw range is multiplied by ENGAGEMENT_RANGE_MULTIPLIER; unlike other weapons it is not divided by WORLD_LINEAR_SCALE.');
  if(spec.damage===0)notes.push('Non-damaging support or infrastructure entry; a nonzero range is not an attack range.');
  if(!atlas)notes.push(id==='industry'?'The 2D fallback and 3D renderer draw a custom factory silhouette; the UI uses the listed Lucide glyph.':'unitArt returns null; the 2D map has a vector fallback and the UI uses the listed Lucide glyph. The current 3D renderer falls back to airfield atlas art.');
  units.push({id,...spec,availability:{playerDeployable:player,scenarioInfrastructure:infrastructure,builtThroughEngineering:id==='bridge',opposingAI:enemy,opposingInitialSpawn:initial,opposingReinforcement:waves,teams:[...(player||infrastructure?['india']:[]),...(enemy?['pakistan']:[])]},derivedBaseValues:{movementMapUnitsPerSecond:fixed(movementInMapUnits(spec.speed)),effectiveRangeMapUnitsWithRadar:fixed((spec.missile?spec.range*ENGAGEMENT_RANGE_MULTIPLIER:engagementDistance(spec.range))*coverageMultiplier(id)),detectionMapUnitsInClearWeather:fixed(engagementDistance(spec.vision)*coverageMultiplier(id))},icon:{glyphName:glyph,glyph:'../images/icons/glyph/'+id+'.svg',atlas},notes});
}
for(const u of units)if(u.icon.atlas)u.icon.atlas.sharedCropWith=units.filter(v=>v.id!==u.id&&v.icon.atlas&&['filename','x','y','width','height'].every(k=>v.icon.atlas[k]===u.icon.atlas[k])).map(v=>v.id);
const counts={total:units.length,playerDeployable:units.filter(u=>u.availability.playerDeployable).length,opposingAI:units.filter(u=>u.availability.opposingAI).length,shared:units.filter(u=>u.availability.playerDeployable&&u.availability.opposingAI).length,opposingOnly:units.filter(u=>!u.availability.playerDeployable&&!u.availability.scenarioInfrastructure).length,engineeringOnly:units.filter(u=>u.availability.builtThroughEngineering).length,atlasCrops:units.filter(u=>u.icon.atlas).length,glyphs:units.length};
const sourceFiles=['lib/game/catalog.ts','lib/game/unit-art.ts','lib/game/engine.ts','lib/game/world.ts','lib/game/maintenance.ts','app/game.tsx'];
const sourceHashes=Object.fromEntries(await Promise.all(sourceFiles.map(async name=>[name,createHash('sha256').update(await read(name)).digest('hex')])));
const catalog={schemaVersion:1,title:'Border Command fictional unit catalog',generatedDate:'2026-09-11',disclaimer:'Every numeric specification is a fictional game-balance value copied from the source code. Real-world-inspired names do not imply real weapon performance, capability or current service inventory.',counts,sourceFiles,sourceHashes,availabilityMeaning:'Player means included in ROSTER and accepted by deploy(). Opposing AI means observed in explicit initial spawns or reinforcement choice arrays. Scenario infrastructure is seeded for both sides; bridges are built through crossing engineering, not the deployment tray. Low-level add() is not a faction-enforcement API, so these describe current game usage, not hard ownership constraints.',unitsOfMeasure:{cost:'fictional credits',hp:'health points per formation',ammo:'formation ammunition pool',range:'raw fictional catalog balance value; non-missile range is multiplied by ENGAGEMENT_RANGE_MULTIPLIER/WORLD_LINEAR_SCALE, while missile range is multiplied only by ENGAGEMENT_RANGE_MULTIPLIER; scoped type multipliers from maintenance.ts apply to the resolved range',vision:'raw fictional detection value; converted by ENGAGEMENT_RANGE_MULTIPLIER/WORLD_LINEAR_SCALE, scoped type coverage multiplier and weather',speed:'raw catalog movement value; converted by MOVEMENT_MULTIPLIER/WORLD_LINEAR_SCALE per simulation second',damage:'base game damage, before game modifiers',cooldown:'simulation seconds',members:'nominal members per formation at full health',income:'base fictional credits per simulation second',slots:'catalog capacity field; retained exactly'},sourceRoot:'game/',worldScale:{WORLD_LINEAR_SCALE,MOVEMENT_MULTIPLIER,ENGAGEMENT_RANGE_MULTIPLIER},atlasInfo,units};
await fs.writeFile(path.join(out,'weapons.json'),JSON.stringify(catalog,null,2)+'\n');

let doc=`# Unit and weapon catalog\n\nAll **${counts.total} catalog types** are documented here: ${counts.playerDeployable} tray-deployable types, ${counts.opposingOnly} opposing-only types and ${counts.engineeringOnly} engineering-created bridge type. ${counts.shared} entries appear on both sides; the opposing AI uses ${counts.opposingAI} types in total. Weapons, reconnaissance, logistics, engineering and installations are all included.\n\n**All specifications are fictional game-balance values copied from the code.** Real-world-inspired names do not represent real weapon performance or current service inventory. Player and opposing labels describe this game's implementation.\n\n[Structured JSON](weapons.json) · [Atlas icon index](ICON-INDEX.md) · [Browser atlas catalog](unit-catalog.html)\n\nThe tables show base catalog values. Cost is in fictional credits; HP and ammunition describe a formation. Range, sight and speed are abstract catalog values, not kilometers or real speeds. The engine applies world scaling, weather, upgrades and other game modifiers. Expand a type for every source field and icon details.\n`;
for(const branch of Object.keys(branchNames)){
  const group=units.filter(u=>u.branch===branch);
  doc+=`\n## ${branchNames[branch]} (${group.length})\n\n| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |\n| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |\n`;
  for(const u of group)doc+=`| ![${md(u.name)}](${u.icon.glyph}) | [${md(u.name)}](#${u.id}) | ${side(u)} | ${md(u.role)} | ${u.cost} | ${u.hp} | ${u.ammo} | ${u.range} | ${u.speed} |\n`;
  for(const u of group){
    doc+=`\n<a id="${u.id}"></a>\n<details>\n<summary><strong>${esc(u.name)}</strong> · ${esc(u.role)}</summary>\n\n![${md(u.name)}](${u.icon.glyph})\n\n| Field | Value | Field | Value |\n| --- | --- | --- | --- |\n`;
    const fields=[['Catalog ID',u.id],['Availability',side(u)],['Branch',u.branch],['Domain',u.domain],['Cost',u.cost],['Health',u.hp],['Ammo',u.ammo],['Range',u.range],['Vision',u.vision],['Speed',u.speed],['Damage',u.damage],['Cooldown',u.cooldown+' s'],['Members',u.members],['Formation',u.formation],['Income',u.income+' credits/s'],['Slots',u.slots],['Targets',u.targets.join(', ')||'None'],['Capture',u.capture?'Yes':'No'],['Air flag',u.air?'Yes':'No'],['Sea flag',u.sea?'Yes':'No'],['Structure',u.structure?'Yes':'No'],['Missile',u.missile?'Yes':'No'],['Art category',u.art],['UI glyph',u.icon.glyphName]];
    for(let i=0;i<fields.length;i+=2)doc+=`| ${md(fields[i][0])} | ${md(fields[i][1])} | ${md(fields[i+1][0])} | ${md(fields[i+1][1])} |\n`;
    doc+=`\nUnmodified movement: ${pretty(u.derivedBaseValues.movementMapUnitsPerSecond)} map units/s. Scaled base range: ${pretty(u.derivedBaseValues.effectiveRangeMapUnitsWithRadar)} map units. Clear-weather detection: ${pretty(u.derivedBaseValues.detectionMapUnitsInClearWeather)} map units.\n`;
    if(u.icon.atlas){const a=u.icon.atlas;doc+=`\nAtlas: \`${a.sourcePath}\`; crop \`x=${a.x}, y=${a.y}, width=${a.width}, height=${a.height}\`; heading correction **${a.correctionDegrees}°**. ${a.sharedCropWith.length?'Shared visual crop: '+a.sharedCropWith.map(x=>'`'+x+'`').join(', ')+'.':''}\n`;}
    if(u.notes.length)doc+='\n'+u.notes.map(n=>'- '+n).join('\n')+'\n';
    doc+='\n</details>\n';
  }
}
doc+=`\n## Runtime interpretation\n\nThe linear world scale is ${pretty(WORLD_LINEAR_SCALE)}, and movement is multiplied by ${MOVEMENT_MULTIPLIER} before dividing by that scale. Non-missile range and sight are multiplied by ${ENGAGEMENT_RANGE_MULTIPLIER} and divide by the linear world scale. BrahMos-inspired cruise range is multiplied by ${ENGAGEMENT_RANGE_MULTIPLIER} without dividing by world scale. The general multiplier was introduced in v0.6. v0.7 additionally multiplies fighter (Rafale, Su-30MKI, Tejas, JF-17, F-16 and J-10C) detection and engagement by 5, and S-400/Akash by 4; other types are unchanged. The derived values above include those multipliers. Passive upkeep adds one ammunition round per 24 seconds and 0.15% maximum health per second after 20 damage-free seconds, excluding deployment and fast service. These conversions remain fictional and should not be presented as real weapon specifications.\n\nUpgrades increase health by 20% per level and effective range by 8% per level. Ground movement slows above 700 m and 2,500 m in the display elevation model. Weather modifies air movement and detection. Two anti-drone types can attack only drone classes despite their broader \`air\` domain flag. Source JSON preserves both the raw fields and these documented exceptions.\n\nIcons use the same Lucide glyph mapping as the app, under the [included license](../images/icons/LUCIDE-LICENSE.txt). Atlas crop coordinates come from \`lib/game/unit-art.ts\`; shared images are labelled explicitly.\n`;
await fs.writeFile(path.join(out,'REFERENCE.md'),doc);

let iconIndex=`# Icon index\n\nAll ${units.length} types have standalone SVG glyphs matching the app's UI icon map. ${counts.atlasCrops} also have source atlas crops; the ${counts.total-counts.atlasCrops} remaining installations have no atlas crop. The PNG atlases are not edited or duplicated by this generator.\n\nThe atlas SVG wrappers reference the repository's existing PNG files. They are intended for inline SVG or standalone SVG browser contexts. External images inside an SVG can be blocked when the SVG is embedded as an image, including GitHub Markdown. Use the standalone glyphs for reliable GitHub table icons, and [the HTML catalog](unit-catalog.html) to inspect the actual atlas art.\n\n| Glyph | ID | UI icon | Atlas | Crop x, y, w, h | Correction | Shared crop |\n| --- | --- | --- | --- | --- | ---: | --- |\n`;
for(const u of units){const a=u.icon.atlas;iconIndex+=`| ![${md(u.name)}](${u.icon.glyph}) | \`${u.id}\` | ${u.icon.glyphName} | ${a?'['+a.filename+']('+a.wrapper+')':'No atlas crop'} | ${a?[a.x,a.y,a.width,a.height].join(', '):'—'} | ${a?a.correctionDegrees+'°':'—'} | ${a?.sharedCropWith.join(', ')||'—'} |\n`;}
iconIndex+=`\nThe Strike UAV crop is intentionally 550×512, matching the current source; it is not normalized to the other 512×512 new-atlas cells. The original atlas uses 240×240 interior crops with an 8-pixel cell inset. Both atlas PNG files are 1536×1024.\n\n[Lucide license](../images/icons/LUCIDE-LICENSE.txt) · [Machine-readable specifications and crop metadata](weapons.json)\n`;
await fs.writeFile(path.join(out,'ICON-INDEX.md'),iconIndex);
await fs.copyFile(path.join(root,'node_modules/lucide-react/LICENSE'),path.join(iconOut,'icons/LUCIDE-LICENSE.txt'));

const cards=units.map(u=>{
  const a=u.icon.atlas;
  const art=a?`<svg class="art" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="${esc(u.name)}"><defs><clipPath id="clip-${u.id}"><rect width="${a.width}" height="${a.height}"/></clipPath></defs><g clip-path="url(#clip-${u.id})"><g transform="rotate(${a.correctionDegrees} ${a.width/2} ${a.height/2})"><image href="../game/public/assets/${a.filename}" x="${-a.x}" y="${-a.y}" width="${a.atlasWidth}" height="${a.atlasHeight}"/></g></g></svg>`:`<img class="art glyph" src="${u.icon.glyph}" alt="${esc(u.name)}">`;
  return `<article data-search="${esc([u.id,u.name,u.role,u.branch,u.domain,side(u)].join(' ').toLowerCase())}">${art}<div class="eyebrow">${esc(branchNames[u.branch])} · ${esc(side(u))}</div><h2>${esc(u.name)}</h2><p>${esc(u.role)}</p><dl>${[['Cost',u.cost],['HP',u.hp],['Ammo',u.ammo],['Range',u.range],['Speed',u.speed],['Damage',u.damage],['Sight',u.vision],['Cooldown',u.cooldown+'s']].map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl><p class="meta">${u.domain} · ${u.members} ${esc(u.formation)} · targets: ${u.targets.join(', ')||'none'}</p>${u.notes.map(n=>`<p class="note">${esc(n)}</p>`).join('')}<a href="REFERENCE.md#${u.id}">All source fields</a></article>`;
}).join('\n');
const html=`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Border Command — all ${units.length} unit types</title><style>:root{color-scheme:dark;font-family:system-ui,sans-serif;background:#101c19;color:#e3ebe5}*{box-sizing:border-box}body{max-width:1450px;margin:auto;padding:40px 24px}h1{font-size:clamp(28px,4vw,50px);margin:.2em 0}.lead{max-width:850px;line-height:1.6;color:#b9cdc2}.tag,.eyebrow{letter-spacing:.08em;text-transform:uppercase;color:#d9c896;font-size:11px}nav{display:flex;flex-wrap:wrap;gap:20px;margin:24px 0}a{color:#dac995}input{width:min(100%,540px);padding:14px;border-radius:8px;border:1px solid #53675c;background:#182b23;color:white;font:inherit}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(265px,1fr));gap:18px;margin-top:30px}article{background:#1c3028;border:1px solid #3b5044;border-radius:14px;padding:20px}article[hidden]{display:none}.art{display:block;width:100%;height:180px;margin:0 auto 20px}.glyph{object-fit:contain;padding:35px}h2{font-size:21px;margin:9px 0}p{line-height:1.45}dl{display:grid;grid-template-columns:repeat(4,1fr);gap:12px 8px;margin:22px 0}dt{font-size:11px;color:#a6bdae}dd{margin:5px 0 0;font-size:21px;font-variant-numeric:tabular-nums}.meta,.note{font-size:12px;color:#b9cdc2}.note{border-top:1px solid #3b5044;padding-top:10px}footer{margin-top:30px;color:#a6bdae;font-size:13px}</style><header><div class="tag">Border Command · developer portfolio</div><h1>Every unit, every source value.</h1><p class="lead">${units.length} unit types across land, air, sea and construction. All numbers are fictional game-balance values, copied from the implementation. Names inspired by real equipment do not describe real weapon performance or current service inventory.</p><nav><a href="REFERENCE.md">Full specification reference</a><a href="weapons.json">Structured JSON</a><a href="ICON-INDEX.md">Icon crops and credits</a></nav><label><span class="tag">Filter catalog</span><br><input id="filter" type="search" placeholder="Try aircraft, radar, navy, opposing…"></label><p id="count" class="meta">${units.length} of ${units.length} types</p></header><main>${cards}</main><footer>Source art: existing game atlases and Lucide UI glyphs. <a href="../images/icons/LUCIDE-LICENSE.txt">Lucide license</a>. Atlas previews use inline SVG and the original PNG files without raster edits.</footer><script>const input=document.querySelector('#filter'),cards=[...document.querySelectorAll('article')];input.addEventListener('input',()=>{let n=0;for(const card of cards){card.hidden=!card.dataset.search.includes(input.value.trim().toLowerCase());if(!card.hidden)n++;}document.querySelector('#count').textContent=n+' of '+cards.length+' types';});</script></html>\n`;
await fs.writeFile(path.join(out,'unit-catalog.html'),html);
console.log(JSON.stringify({out,counts,WORLD_LINEAR_SCALE,sourceHashes},null,2));

const summary=doc.replace('Expand a type for every source field and icon details.','Follow a type name to the complete field reference.').replace(/\n<a id="[^]*?<\/details>\n/g,'\n').replace(/\(#([a-z0-9]+)\)/g,'(REFERENCE.md#$1)');
await fs.writeFile(path.join(out,'WEAPONS.md'),summary);
