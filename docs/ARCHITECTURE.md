# Architecture and technical choices

[Portfolio index](../README.md) · [Product requirements](PRD.md) · [Validation](VALIDATION.md)

I kept simulation rules separate from presentation so visual changes would not silently alter combat. React and TypeScript provide the interface; Vinext/Vite builds the application; Three.js renders terrain. The complete source and pinned dependency resolution are under [game/](../game/) and [package-lock.json](../game/package-lock.json).

## Components and responsibilities

| Component | Responsibility | Product reason |
| --- | --- | --- |
| [catalog.ts](../game/lib/game/catalog.ts) | Unit roles, target domains, costs, difficulty settings and 15 scenarios. | Make content and balance decisions inspectable. |
| [engine.ts](../game/lib/game/engine.ts) | Orders, detection, combat, resources, enemy decisions and victory. | One authoritative state for consistent outcomes. |
| [theatre.ts](../game/lib/game/theatre.ts) | Connected sectors, crossings, diplomacy and civilian context. | Make geography and consequences affect choices. |
| [navigation.ts](../game/lib/game/navigation.ts), [terrain.ts](../game/lib/game/terrain.ts), [world.ts](../game/lib/game/world.ts) | Valid routes, elevation/river constraints and independent scale controls. | Preserve meaningful travel and readable obstacles. |
| [maintenance.ts](../game/lib/game/maintenance.ts), [report.ts](../game/lib/game/report.ts) | Passive upkeep, coverage multipliers and cumulative impact. | Reduce routine clicks while retaining visible costs and consequences. |
| [alerts.ts](../game/lib/game/alerts.ts), [motion.ts](../game/lib/game/motion.ts), [camera.ts](../game/lib/game/camera.ts) | Incident grouping, known-pose interpolation and following. | Improve awareness and motion without revealing hidden state. |
| [game.tsx](../game/app/game.tsx), [terrain-view.tsx](../game/app/terrain-view.tsx) | Command map, controls, 3D relief and effects. | Offer overview and close inspection of the same operation. |

## Simulation and information flow

The interface accumulates elapsed time and advances the engine in **0.1-second steps**. Pause stops simulation systems; speed changes their shared clock. Seeded randomness supports reproducible starting conditions and regression comparisons. Rendering runs separately and blends previous known positions and shortest-turn headings; it does not predict unseen enemy movement.

Each side maintains its own contacts. Detection creates a contact, closer observation identifies it, and last-known information becomes stale. Engagement needs a current identified target plus eligible domain, range, ammunition and readiness. Under fog, the opponent chooses from its own contacts. This is **rule-based game AI**, not an LLM at runtime: it pursues nearby eligible contacts, moves toward objectives and purchases scenario-appropriate reinforcement waves within its budget. I chose bounded behaviour that could be inspected and tested; it is not a learning opponent or an unrestricted strategic planner.

Local reactions preserve explicit orders. Cruise strikes remain player-authorized, and recon orders suppress automatic surface attacks. Coverage helpers are shared with previews so displayed rings follow the same fictional balance rules as combat.

## Terrain, upkeep and consequences

![Northern Command terrain shading, river crossings and command overlays in the 2D view](../images/gameplay/terrain-view.jpg)

Bundled geography, textures and generated terrain relief remove a map-service dependency. Routes respect land/sea domains, highlighted river barriers and high terrain. Open crossings have bridge assets; destruction closes the route, and engineering completion creates a replacement span. Connected-sector ownership controls forward deployment and territory income. The 16× area setting, 3× movement and platform coverage multipliers are independent tuning choices.

I added passive ammunition and delayed low-rate healing for both sides while retaining faster paid service. Damage reporting records actual combat damage before later repair, so healing cannot erase mission history. Preplaced military works are excluded from recurring industry income and economy-construction credit. Civilian panic is aggregated separately and never enters the military victory function.

## Persistence, delivery and trade-offs

Local saves serialize game state; validation and defaults handle older maintenance/report fields. Historical impact cannot be reconstructed from an old save, so reporting begins at its upgrade time. Motion snapshots remain transient presentation state. World migrations relocate invalid surviving units and clear obsolete routes.

The browser-first approach avoids account setup and runtime model cost, but supplies neither cloud synchronization nor multiplayer authority. Terrain detail and many units increase GPU and balance demands; automated checks do not establish visual performance. The [GitHub workflow](../.github/workflows/ci.yml) runs verification, not deployment. The portable source excludes runtime output and the redundant generated source ZIP; its hosting manifest is sanitized. See [validation](VALIDATION.md) for evidence and remaining limits.
