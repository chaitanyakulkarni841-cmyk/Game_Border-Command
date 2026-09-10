# Measurement and validation

[Portfolio index](../README.md)

**Status:** proposed evaluation plan. Targets are acceptance hypotheses, not measured outcomes. Automated checks do not establish that the game is intuitive or enjoyable. No player analytics or retention results are claimed.

## Product outcome

A new player completes a purposeful loop without coaching: **start → deploy → select → move or attack → understand feedback**. Strategic depth matters after this loop is understood.

## First-session evaluation

Observe five people unfamiliar with the game. This small sample discovers usability problems; it does not estimate population-wide performance. Use the same starting scenario and record device, difficulty and seed.

| Question | Measure | Initial target |
| --- | --- | --- |
| Can players begin? | Time from opening the game to starting a scenario. | At least 4/5 start within 30 seconds without help. |
| Is the core loop discoverable? | Time to valid deployment and purposeful movement or attack. | At least 4/5 complete both within two minutes. |
| Can players navigate? | Successful pan, selection and return from cinematic following. | At least 4/5 complete tasks without losing orientation. |
| Are constraints understandable? | Explanation of a blocked crossing, unavailable order or supply limit. | At least 4/5 identify a valid next action. |
| Is there a reason to continue? | Voluntary continuation, replay choice and intended next strategy. | Record qualitatively; establish a baseline before setting a rate. |

Ask what players expect before acting. Record unintended orders, repeated clicks, overlooked controls and requests for help. Distinguish control failures from deliberate strategic mistakes.

## Engineering gates

| Risk | Verification |
| --- | --- |
| Orders/resources behave inconsistently. | Deterministic movement, combat, deployment, supply and objective tests. |
| Pause/save/restart corrupts a session. | State-transition and save compatibility checks. |
| AI or fog reveals hidden information. | Detection and engagement regressions. |
| Documentation overstates a release. | Compare test records with the identified source revision; list unverified browser/GPU/touch behaviour. |

## Optional instrumentation

If anonymous telemetry is added later, begin with only `scenario_started`, `unit_deployed`, `order_accepted`, `order_rejected`, `scenario_completed` and `replay_started`. Use aggregated counts and elapsed time; no free text, personal identifiers or actual geographic locations. Observation is sufficient for the first study.

## Decision rules

Fix blockers before adding features. If a control is missed, improve placement or wording before adding another tutorial. If movement creates waiting, tune pacing without changing every simulation system. Repeat the affected task and publish results with sample size, method and limitations.
