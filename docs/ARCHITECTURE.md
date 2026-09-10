# Architecture and technical choices

[Portfolio index](../README.md)

## Separation of concerns

| Area | Responsibility | Product reason |
| --- | --- | --- |
| Simulation | Stable timestep, orders, combat, resources, objectives and seeded randomness. | Reproducible decisions and consistent pause/speed behaviour. |
| Configuration | Unit archetypes, scenarios, difficulty and world tuning. | Balance content without embedding every choice in interface code. |
| Presentation | Command map, terrain, effects, selections and panels. | Improve visual clarity without changing combat rules unintentionally. |
| Persistence | Local saves, version compatibility and reset paths. | Preserve progress and avoid stale-state failures after upgrades. |
| Hosting | Public browser entry and bundled assets. | Let a reviewer play with minimal setup. |

The prepared release uses TypeScript and separates world/simulation concerns from UI rendering. Full file-level architecture and exact dependency versions must be reconciled with the source package when it is imported into this repository.

## Important decisions

- **Fixed simulation time:** pause and speed must affect all simulation systems together; animation is presentation of state.
- **Seeded scenarios:** replayability enables controlled comparisons and regression checks.
- **Fictional normalized data:** no technical ranges or inventories are presented as operationally accurate.
- **Bundled map fallback:** external map outages must not block gameplay.
- **Independent scale controls:** a 20× area request is not the same as 20× each coordinate dimension. Movement tuning is separate from simulation speed.
- **Save compatibility:** coastline/world changes need explicit migration instead of silently leaving old units in invalid terrain.
- **Visibility boundary:** rendering and opponent decision-making must respect detection state under fog.

## Trade-offs

Terrain relief and cinematic effects improve situational readability only if they preserve responsiveness. Additional unit roles increase choice but expand balance and onboarding work. A local-first game reduces entry friction but does not provide cloud saves or multiplayer.

## Source and verification

The recorded release is linked in [version history](../versions/README.md). Source packaging is currently awaiting import; this document does not claim the remote repository can yet build. Automated checks and remaining browser/GPU risks are listed in [validation](VALIDATION.md).
