# Product decisions and trade-offs

[Portfolio index](../README.md) · [Version evolution](../versions/README.md)

**I wanted people to understand the game quickly, then discover its depth through play.** I refined the requirements over successive versions, especially where realism was making the controls or pacing harder to understand. The decisions below reflect that iteration; I have not presented my own feedback as an external user study.

## From feedback to a product decision

| Feedback or constraint | Decision implemented | Trade-off / question to test |
| --- | --- | --- |
| “Attack when I click the enemy.” | Select a friendly unit, then click an eligible detected target; remove a redundant attack-confirmation step. | Fewer clicks increase accidental-order risk. Are selection and accepted orders unmistakable? |
| “Manual drag was easier.” | Ordinary drag pans; Cmd/Ctrl-drag bulk-selects. Keep numbered groups, queued routes and formations. | Familiar navigation is prioritized; selection modifiers need visible hints. |
| “Forces and build should be pinned.” | Keep recruitment and construction in a persistent, prominent entry point with role, cost and placement feedback. | Map space is limited, especially on small screens. |
| “Make the land 20× larger, movement 3×.” Later: “20% smaller.” | Separate world-area scaling from movement. The current theatre is 16× the original area baseline, with 3× world movement. | Scale is a pacing variable, not proof of quality. Measure waiting and orientation rather than maximizing size. |
| “Units should defend nearby automatically.” | Ready combat formations engage eligible identified threats locally; direct orders remain available. | Reduce repeated commands while preserving target compatibility, ammunition, cooldowns and special manual-launch rules. |
| “Alert me and let me reach the attack.” | Group incidents, mark the map, offer View attack / J, Respond and Previous area. | Avoid alert fatigue and never expose an unseen attacker through a notification. |
| “Resupply and healing should happen slowly.” | Restore one ammunition unit every 24 seconds; heal 0.15% of maximum health per second after 20 seconds without damage. Keep faster paid service and EMPTY labels. | Upkeep becomes optional intervention, but recovery time must still matter. Destroyed equipment does not revive itself. |
| “Increase interception and detection.” | Fighter coverage grows 5× and S-400/Akash coverage 4× relative to v0.6; eligible armed ground vehicles can also be engaged by these fictional SAM archetypes. | Broader coverage creates action sooner but may weaken positioning decisions. Other unit multipliers remain unchanged. |
| “Add bridges, industry and a mission scoreboard.” | Seed fictional military works, make bridges attackable/rebuildable, and retain cumulative damage and combat-panic reporting. | Scenario works must not grant free economic wins. Civilian impact is reported separately from military victory. |
| “Movement should be smooth.” | Interpolate known positions and headings between fixed simulation steps in both views and following cameras. | Improve presentation without changing simulation outcomes or predicting hidden contacts. |

## How I prioritized

**I protected the core loop first:** launch, deploy, command, understand feedback and reach an outcome. Save integrity, rejected-order explanations and reliable restart behavior support every scenario.

**I added depth through interacting constraints:** terrain and crossings shape routes; reconnaissance determines eligible contacts; supply and maintenance affect readiness; connected sectors provide territory value. Additional platforms should offer a distinct role, not merely a larger list.

**I wanted presentation to support judgment:** recognizable silhouettes, terrain relief, coverage previews and attack markers should help players read the situation. The dependable command map remains available when 3D is unsuitable.

## Evidence and the next decision

The [engine](../game/lib/game/engine.ts), [maintenance rules](../game/lib/game/maintenance.ts), [alerts](../game/lib/game/alerts.ts) and [regressions](../game/tests/maintenance-infrastructure.test.mjs) make these choices inspectable. These checks establish behavior; they do not show whether people enjoy it more. Before adding another major interface layer, I would run the [first-session evaluation](MEASUREMENT.md) and prioritize the most common failure it reveals.
