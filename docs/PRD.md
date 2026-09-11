# Product requirements

[Portfolio index](../README.md) · [Decisions](PRODUCT-DECISIONS.md) · [Validation](VALIDATION.md)

**Product:** Border Command · **Current specification:** v0.7  
**Promise:** a first-time player can act immediately, then discover depth through terrain, information, timing and resources.  
**Audience:** browser strategy players and portfolio reviewers; no installation or long manual.

## Problem and product goal

I wanted combined-arms detail without a complicated command system. Large maps make finding units, issuing orders and noticing attacks harder. I addressed those problems through direct commands, pinned recruitment, automatic local defence and visible consequences.

The core loop is **deploy → detect → command → resolve → sustain → complete objectives**. My intended default session is 10–15 minutes, not a measured engagement result. Players should understand their next action and why it succeeds or fails.

## Scope and boundaries

The player commands India against a computer-controlled Pakistan in fictional conventional operations. The map uses recognizable regional geography, bundled terrain and neutral approximate disputed boundaries, including the LoC. Installations, deployments, inventories and performance values are fictional. The interface displays **“Fictional scenario • Abstracted capabilities.”**

I kept cities and civilian centers contextual, not selectable attack targets. Military resource works and logistics bridges can be attacked; nearby panic appears in a separate humanitarian report. Core play requires no login or paid API. Nuclear weapons, live intelligence, operational targeting data and verified real-world engagement envelopes are outside the scope.

## Prioritized requirements and acceptance

| Priority | Player requirement | Acceptance criterion |
| --- | --- | --- |
| P0 | Start and orient quickly | Play Now opens a running scenario with a visible objective, resources and pinned Forces & Build. |
| P0 | Give direct orders | Select friendly forces, then click an eligible identified enemy to attack. Ordinary drag pans; Cmd/Ctrl-drag bulk-selects. Rejected actions explain the reason. |
| P0 | Deploy meaningful defence | Placement previews eligibility and abstract coverage. Setup, relocation, supply, radar, ammunition and engagement-slot constraints remain active. |
| P0 | Avoid repetitive defence clicks | Ready units react to eligible identified threats in range while respecting cooldown, service and truce states. Recon aircraft do not automatically strike surface targets; cruise launches remain deliberate player orders. |
| P0 | Understand expanded coverage | Six fighter types have 5× v0.6 detection/engagement radii; S-400/Akash have 4×. Their fictional ground-defence role is restricted to armed mobile land units. No guaranteed interception. |
| P0 | Recover without constant upkeep | Surviving ready equipment replenishes one round per 24 simulation seconds. Healing starts 20 seconds after damage at 0.15% maximum health per second. Paid service is faster; destroyed assets do not revive automatically. |
| P0 | Recognize shortages and danger | Armed units with zero ammunition show EMPTY. Grouped attack markers and View/Respond/Previous area controls let players inspect an incident and return. |
| P0 | Trust the session | Seeded initialization, fixed simulation time, pause/speed, restart, local save/resume and explicit outcomes behave consistently. |
| P1 | Coordinate combined arms | Groups, queued routes and formations support army, aircraft, naval, drone, engineering and logistics roles. Connected territory unlocks income and deployment. |
| P1 | Read terrain and infrastructure | Rivers and difficult terrain constrain routes. Destroying a logistics bridge closes its crossing; engineers can rebuild. Preplaced works do not satisfy economy-construction goals. |
| P1 | Control presentation | Fullscreen, layers, unit inspection, follow/return, sound controls, reduced-motion support and practical touch input keep information accessible. |
| P1 | Read movement and consequences | Known positions interpolate in map, terrain and follow views. Every mission reports cumulative asset/infrastructure damage, destruction and civilian panic separately from military victory. |

P0 protects the playable loop; P1 deepens decisions without adding mandatory steps to every order.

## Content, balance and release gates

I expanded the original **Shield, Contested Skies and Command Campaign** into [15 operations](../specs/SCENARIOS.md). Easy, Normal, Hard and Custom change resources, activity, damage and information conditions. [Platform specifications](../specs/WEAPONS.md) explain roles and limitations rather than claiming authentic force strength.

The current world area is 16× the original baseline, following the reduction from 20×; physical movement remains 3×. I treated these as separate pacing controls, not map-accuracy claims.

Release gates cover build/type/simulation checks, saves, documentation and outcomes. [Validation](VALIDATION.md) separates recorded checks from open interaction and usability work. Cloud saves, multiplayer and photorealistic 3D battles remain outside the delivered scope.
