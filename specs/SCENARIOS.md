# Scenario design

[Portfolio index](../README.md)

The original brief defines three baseline modes. The preparation record reports 15 implemented operations; the exact expanded IDs, names and configuration values are awaiting source import and are not reconstructed here.

| Baseline | Player goal | Decision tension | Acceptance requirement |
| --- | --- | --- | --- |
| **Shield** | Protect three fictional installations through escalating waves. | Concentrate defence or spread limited coverage; replenish before the next threat. | Waves escalate, defended assets remain visible and win/loss rules are explicit. |
| **Contested Skies** | Compete for control of fictional airspace sectors. | Commit aircraft to control or preserve endurance and readiness. | Sector progress and eligible control conditions are understandable. |
| **Command Campaign** | Manage bases, supply and forces across a longer operation. | Expand connected territory while protecting sustainment. | Resource, deployment and objective effects remain consistent over a longer session. |

## Expansion principles

Terrain, drone pressure, naval movement, engineering crossings and diplomatic choices should change the decision, not merely the number of enemies. Civilian-protection feedback may add context and panic without deciding the military victory condition. Cities remain ineligible combat targets.

## Difficulty

| Setting | Intended simulation effect |
| --- | --- |
| Easy | Slower opposing decisions, fewer simultaneous attacks and generous player resources. |
| Normal | Balanced resources and coordinated opposing activity. |
| Hard | Faster decisions, stronger resource management and more varied attacks. |
| Custom | Adjustable resources, activity, fog, damage intensity and starting forces. |

Fog rules apply to the opponent's own detected information. Seeded starting states support reproducible testing. Weather and terrain use abstract modifiers; no live feeds are required.

## Authoring gate

Each scenario needs starting conditions, an objective, reachable victory and defeat, a target duration, meaningful constraints and verified pause/save/restart behaviour. Use the [scenario template](../templates/scenario-template.md). The default 10–15 minute duration is a design target, not a measured average.
