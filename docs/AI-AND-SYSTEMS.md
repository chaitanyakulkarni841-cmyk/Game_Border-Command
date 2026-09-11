# AI and systems: believable behavior, clear boundaries

[Portfolio index](../README.md) · [Architecture](ARCHITECTURE.md) · [Product decisions](PRODUCT-DECISIONS.md)

**I wanted an opponent that creates pressure and makes players adapt, while keeping the game understandable and repeatable.** That meant being explicit about what the computer can see, how it chooses actions and which decisions belong to the player.

The runtime opponent uses rules and seeded randomness. It does not call an LLM, train a model or retrieve live military information. AI assistance supported development, but the game’s intelligence comes from its simulation and decision rules.

## Why this kind of AI fits the game

I did not need generated dialogue or open-ended reasoning in the combat loop. I needed responsive units, consistent constraints and behavior that could be reproduced when something went wrong. An LLM call would introduce latency, cost and nondeterminism without being necessary for that experience.

The [engine](../game/lib/game/engine.ts) advances in fixed 0.1-second steps. Random choices use a seed, so the same starting conditions and command timing can be replayed. Difficulty changes resources and opponent activity through [configuration](../game/lib/game/catalog.ts). This gives me a way to adjust challenge without hiding the rules behind a model response.

## Information and decision boundaries

| System | Behavior | Why I chose it |
| --- | --- | --- |
| Detection | Each team has its own observed contacts. Detection, identification and engagement are distinct checks. | Fog of war should constrain both sides, not become a visual effect over an all-knowing opponent. |
| Opponent decisions | Eligible recent contacts guide target selection; units otherwise move toward configured objectives or patrol areas. | Creates local reactions and pressure without pretending to be human-level strategic reasoning. |
| Automatic defence | Ready formations engage compatible identified targets within coverage, subject to ammunition and cooldown. | Removes repetitive firing commands while preserving placement and resource decisions. |
| Player authority | Direct orders remain available; cruise launches are manual; responding to an alert opens deployment choices. | Automation should help the player act, not silently spend their credits or take over the battle. |
| Recovery | Slow replenishment and delayed healing coexist with faster paid service. | Makes routine upkeep manageable while leaving a meaningful time-versus-cost choice. |
| Presentation | Alerts show the friendly incident location; interpolation smooths known positions only. | Visual feedback must not accidentally reveal hidden enemy information. |

## How I evaluate the behavior

I want checks that could prove a requirement wrong, rather than checks that merely confirm the interface renders.

- **Range and compatibility:** verify fighter coverage is 5× and S-400/Akash 4× relative to v0.6, while unrelated types stay unchanged and unsupported targets remain invalid.
- **Maintenance:** test both teams and multiple equipment branches; cap ammunition and health, reset healing delay after damage, preserve faster manual service and prevent wrecks from reviving.
- **Infrastructure:** destroy a bridge, confirm closure, rebuild it, and ensure seeded works do not provide unearned economy objectives.
- **Information:** confirm smoothing does not follow hidden contacts and alerts do not disclose unseen attackers.
- **Continuity:** pause timers consistently, preserve save compatibility and retain cumulative damage after repair.

These cases are inspectable in the [maintenance/infrastructure tests](../game/tests/maintenance-infrastructure.test.mjs) and [alert tests](../game/tests/reactions-alerts.test.mjs). The [verification record](VALIDATION.md) identifies actual release results.

## Judgment beyond automated checks

Predictable rules can still produce a boring or unbalanced game. Larger ranges may make defence too dominant; automatic upkeep may make spending irrelevant; frequent alerts may overwhelm attention. I would evaluate those through matched scenario runs and observed play, as described in [measurement](MEASUREMENT.md).

My aim is to choose the simplest behavior that creates a useful player decision, make its limits visible and have a practical way to test it.
