# Measurement and validation plan

[Portfolio index](../README.md) · [Release verification](VALIDATION.md)

**This is the evaluation I would run next.** The thresholds below are my starting hypotheses, not measured outcomes. Automated checks confirm specific behavior, but they cannot tell me whether people find the game intuitive or enjoyable. I have not claimed player analytics or business returns.

## Define success around the core loop

I would consider the basic experience successful when a new player can complete **start → deploy → select → move or attack → understand feedback** without coaching. Strategic depth matters after this loop works. The most useful first measure is successful purposeful action, not time spent staring at the map.

I would start by observing five people unfamiliar with the game using the same starting scenario, difficulty and seed. I would record device and browser. This small study is intended to find usability problems, not estimate population-wide conversion or retention.

| Question | Task / measure | Initial acceptance hypothesis |
| --- | --- | --- |
| Can players start? | Time from opening the game to a running scenario. | At least 4/5 start within 30 seconds without help. |
| Can they complete the core loop? | Valid deployment followed by purposeful movement or attack. | At least 4/5 complete both within two minutes. |
| Can they control the map? | Pan, bulk-select, follow a unit and return. | At least 4/5 complete the sequence without losing orientation. |
| Can they react to a battle? | Notice an alert, focus it, locate a response option and return. | At least 4/5 complete the sequence without coaching. |
| Do upkeep choices make sense? | Explain EMPTY, passive recovery and faster paid service. | At least 4/5 predict which action costs credits and which requires waiting. |
| Are obstacles and results understandable? | Explain a blocked bridge and distinguish military result from cumulative damage/panic. | At least 4/5 identify a valid route or engineering action and interpret the report. |
| Is there a reason to continue? | Voluntary continuation, replay choice and intended next strategy. | Record qualitatively first; set a rate only after a baseline exists. |

I would ask what players expect before they act, then record unintended commands, repeated clicks, missed controls, waiting and requests for help. I would separate confusing controls from deliberate strategic mistakes.

## Three evidence layers

| Layer | What to check | What it cannot prove |
| --- | --- | --- |
| Simulation regression | Detection, compatible targets, orders, resource limits, maintenance timing, bridges, reports and save migration. | Visual smoothness or scenario enjoyment. |
| Interface and performance | Actual clicks, keyboard/touch, panel readability, camera return, frame responsiveness and fallback behavior. | Long-term engagement from a single session. |
| Product observation | Task completion, explanations, confusion patterns and voluntary replay. | Broad market demand from five participants. |

Use [release verification](VALIDATION.md) for the actual source revision and recorded checks. Compare range and upkeep variants using matched seeds and identical scripted conditions before attributing balance changes to a parameter. Record losses, engagement timing and resource spending; avoid changing several parameters at once.

## Optional future instrumentation

If I add telemetry, I would begin with aggregate counts and elapsed times for `scenario_started`, `unit_deployed`, `order_accepted`, `order_rejected`, `attack_alert_focused`, `service_requested`, `scenario_completed` and `replay_started`. I would avoid free text, personal identifiers and real geographic locations. Telemetry is not currently implemented.

## Decisions after evaluation

I would fix blockers before expanding features. If a control is missed, I would improve its placement or wording before adding another tutorial. If broader coverage removes meaningful positioning, I would retune coverage rather than add compensating complexity. I would repeat the affected task and publish the method, sample size, result and remaining uncertainty.
