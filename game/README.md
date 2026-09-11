# Border Command · Command 07

A playable browser RTS commanding India in a fictional conventional conflict. **29 unit and building types, 15 operations, land/air/naval forces, terrain routing, drones, defence deployment, connected sectors and diplomacy.** The simulation runs locally; no login, API key, backend database or live military feed is needed for gameplay.

## Play immediately

1. Press **Play now**. Space pauses or resumes.
2. Select a friendly unit, then **click terrain to move** or **click an identified enemy to attack**. No attack-confirmation button.
3. Use the pinned **Forces & Build** rail to reinforce. **Quick deploy** finds a valid nearby position; **Place on map** lets you choose it. On smaller screens, the gold Forces & Build button remains available.

Change the command selector to **Northern Command, Western Command, Western Front, Southern Command, Maritime Command, or All India**. Your forces filters the current command and service branch; search finds formations across commands. Selecting a formation from the list centers it on the map. The fullscreen button opens an immersive view when the browser supports it.

| Action | Control |
| --- | --- |
| Inspect latest attack | J / View attack / orange map marker |
| Reinforce an incident | Respond → Quick deploy or Place on map |
| Return after incident | Previous area |
| Pan | Drag the map normally |
| Bulk select | Cmd-drag on Mac; Ctrl-drag on Windows/Linux |
| Add a unit | Shift-click a friendly unit |
| Move / attack | Select formations, then click terrain / an identified enemy |
| Queue destinations | Shift-click terrain; or More → Queue route |
| Assign / recall group | Cmd/Ctrl + 1–9 / 1–9 |
| Formation | More → Line, Column or Wedge |
| Stop / repair / resupply | Buttons beside the selected unit |
| Camera follow / return | C / M or Escape; on-screen camera controls |
| Zoom | Scroll or + / − |
| Pause / resume | Space or the top Play/Pause control |
| Touch selection | Switch Drag to pan to Drag to select |

**Yellow rivers** constrain ground routes: use a marked open crossing or bring engineers to a closed span. **Amber terrain** slows ground movement; **red high peaks** block it. Move into a sector’s **dashed capture circle** to take control. Connected captured sectors earn credits and support forward deployment; disconnected sectors lose these benefits.

More opens formations, connected fronts, river engineering, civilian relief and diplomatic offers. Accept or decline diplomacy after reading the explicit consequences. Civilian protection is reported separately and never changes the military result.

## What changed in version 0.7

- Fighter detection and engagement radii are **5× v0.6**; S-400 and Akash are **4× v0.6**, with fictional ground-vehicle defence. Other platform ranges are unchanged.
- All surviving equipment receives **one round every 24 seconds** and **0.15% integrity per second after 20 seconds without damage**. Setup and fast service suspend passive maintenance. Aircraft automatically return for fuel; paid manual service remains faster.
- **EMPTY** stock indicators appear on friendly map markers, the forces list and the inspector. Support units with no weapons are not marked empty.
- Fictional military works populate all nine sectors. Bridges are attackable assets: destruction closes a crossing; engineers can rebuild it. Scenario works add no extra income or economy construction credit.
- The mission scoreboard retains cumulative friendly/opposing asset damage, infrastructure destruction and damage points, civilian panic generated, peak combat panic and affected communities. Civilian outcomes stay separate from military victory.
- Unit positions and headings interpolate between simulation steps in both map views and the follow camera. Saves retain maintenance progress and reports; older saves initialize these safely.

## What changed in version 0.6

- The playable world has **20% less area than v0.5** (16× the original baseline), while keeping the complete geography and 3× world movement.
- **25% longer engagement and detection ranges** in fictional world units; placement previews use the same radar-aware range as combat.
- Ready aircraft, strike drones, infantry and tanks respond to eligible nearby contacts automatically. Manual routes and attack priorities remain intact; reconnaissance avoids unsolicited surface attacks and cruise launchers stay manual.
- Holding aircraft return to rearm when ammunition is exhausted.
- **Attack alerts** group incoming fire, damage, losses and evaded attacks at friendly locations. Click a map marker, **View attack**, or **J** to inspect. **Respond** opens reinforcements near the incident; **Previous area** restores your map area. No automatic camera jump or hidden attacker location is exposed.
- Alerts persist in saves; older saves receive an empty alert history.

## What changed in version 0.5

- **20× total playable land area**, calibrated against the previous land mask and navigable rectangle, including the newly accessible geography.
- **3× unit movement in world distance**. Combat clocks, income, construction, fuel and diplomatic timers are not accelerated. The expanded theatre still makes long journeys meaningful; the default camera is closer.
- Full geographic context extends **58–98°E, 4–40°N**: mainland India, northeast India, Jammu and Kashmir, Ladakh, Lakshadweep and the Andaman and Nicobar Islands. Approximate LoC segments and disputed boundaries are distinguished from normal map outlines.
- Persistent deployment rail, one-click reinforcement, command-local force lists, default drag navigation and modifier-drag selection.
- Denser bundled relief, contours, river obstacles, readable capture areas and optional 3D terrain. 3D contours follow the terrain surface, and geographic lines are clipped to the terrain rectangle.
- Older saves restore paused. Units stranded by refined coastlines move to a nearby valid surface while retaining their identity and condition; their obsolete route is cleared.

Geography remains in normalized map coordinates for save compatibility. `lib/game/world.ts` defines world-distance conversions. Clipped polygon-union areas are 555,211.7692282742 old map² and 844,688.4027708931 new map²; linear scale is `sqrt(20 × old / new)`. Unit speed converts as `3 × base speed / linear scale`. Tactical detection, defence, capture and formation spacing scale with world distance. Strategic supply/deployment influence, cruise-battery reach and bridge access remain broad, fictional gameplay abstractions.

## Run locally

Use **Node.js 24** and npm. Extract the source ZIP, open its folder, then:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Assets are bundled: after loading, gameplay does not need external map services. Browser local storage holds one saved operation on that device and origin. No service worker is included, so a completely offline page reload is not guaranteed.

For a production build:

```sh
npm run build:local
npm run start
```

The managed release uses `npm run build`, which adds a GNU `timeout` wrapper and is supported on Linux/WSL. `build:local` skips that wrapper for macOS and other environments. The production output is a Vinext/Cloudflare Worker application, **not a static GitHub Pages bundle**.

## GitHub

Create your repository and upload the extracted source folder’s contents, including `.github`, `.openai` and the lockfile. The export excludes dependencies, build products, local runtime state, credentials and the existing hosted project identity. `.openai/hosting.json` in the export contains only null storage bindings so local configuration resolves without linking to the existing site.

GitHub Actions uses Node 24, installs the lockfile, builds, type-checks and runs the game and built-HTML checks. Uploading source does not publish a game server or configure GitHub Pages. Dependency licences remain in their packages; geographic attribution is supplied with the assets.

```sh
npm run typecheck
npm run test:unit
# Linux/WSL: build + typecheck + all release checks
npm test
```

## Gameplay depth

15 missions cover defence, airspace control, command campaigns, ground capture, fleets, convoys, fictional airfield raids, reconnaissance, economic expansion, adverse weather and an open sandbox. Difficulty changes resource generation, opponent decisions, waves and damage; custom settings expose these controls.

Air defence has deployment delays, ammunition, radar/supply support and simultaneous engagement limits. Aircraft consume fuel and return to rearm. Engineers build installations and pontoon crossings; resource works earn credits. Ground and naval units route over their allowed surfaces. Strike UAVs, interceptor drones and counter-drone vehicles have different roles. Orders can be queued, formations share a movement pace, and numbered groups persist in saves.

The cinematic camera follows a selected formation, fleet or missile, with immediate return to the command map. Projectiles animate in flight and resolve damage on arrival. Front lines change as connected ground sectors are held. Optional diplomatic agreements have visible economic and reinforcement consequences.

## Code map

- `lib/game/catalog.ts`: editable fictional platforms, scenarios and settings.
- `lib/game/engine.ts`: fixed 0.1-second simulation, seeded combat, AI detection, resources and saves.
- `lib/game/world.ts`, `commands.ts`: physical scale and command presets.
- `lib/game/navigation.ts`, `terrain.ts`, `cartography.ts`: routing, elevation, river barriers and geographic context.
- `lib/game/theatre.ts`: connected territory, engineering, drones, diplomacy, relief and groups.
- `app/game.tsx`, `recruitment.tsx`: command interface and deployment.
- `app/terrain-view.tsx`, `cartographic-overlay.tsx`, `theatre-controls.tsx`: 2D/3D rendering and overlays.
- `public/`: bundled map, elevation and original unit artwork.

`worker-configuration.d.ts` supplies official generated Worker runtime types. `worker-types.json` is only the type-generation configuration, including the unused starter's optional DB type; it does not configure deployed storage. The game does not use a database.

## Scope and verification

All military sites, inventories, strengths, deployments, weapon values and combat outcomes are fictional. Contextual cities and civilian communities are not selectable combat targets. Geography and approximate disputed boundaries provide context, not a statement resolving territorial claims. No nuclear weapons or live intelligence feeds are included.

The optional 3D view combines a relief mesh and detailed textured miniatures; it is not a photorealistic 3D battlefield. WebGL support is required for it; a 2D fallback remains playable. Attribution and data limitations are in `public/MAP-SOURCE.md`, `public/assets/TERRAIN-SOURCES.md` and `public/assets/ELEVATION-SOURCES.md`.

Release verification covers the production build, TypeScript, engine behavior, world scaling, all 15 scenario initializations, combat and direct attacks, fog, terrain routing, capture, engineering, drones, diplomacy, save migration and rendered HTML. Browser interaction and GPU rendering have not been automatically tested; those remain a manual release check before a wider launch.
