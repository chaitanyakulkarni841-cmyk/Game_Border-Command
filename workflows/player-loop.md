# How a mission plays

[Portfolio index](../README.md) · [Controls](../docs/CONTROLS.md) · [Scenarios](../specs/SCENARIOS.md)

I designed the first interaction around three actions: **select a force, choose a location, click an eligible enemy**. Groups, queued routes and camera controls add depth after that basic loop is familiar.

![Command map with visible forces and deployment controls](../images/gameplay/command-map.jpg)

## The decision loop

| Stage | Player decision | System response | What explains a blocked action |
| --- | --- | --- | --- |
| **1. Choose an operation** | Defend, capture, escort, scout or build? | Sets starting forces, objective, deadline and difficulty. | Objective text explains the required outcome. |
| **2. Deploy** | Which role and location justify the cost? | Pinned Forces & Build exposes roles and costs; map previews placement and coverage. | Insufficient credits, ineligible sector, missing support or invalid land/sea placement. |
| **3. Observe** | Where is more information needed? | Sensors detect and identify contacts; last-known contacts fade. | Hidden, unidentified or stale contacts cannot support an immediate targeted attack. |
| **4. Command** | Move, defend, cross or attack? | Direct clicks issue eligible orders; formations and queued destinations coordinate travel. Ready units defend locally without extra clicks. | Terrain, closed crossings, readiness, ammunition or target-domain mismatch. |
| **5. Respond** | Continue, reposition or reinforce? | Attack alerts mark observed incidents. View/J focuses the site; Respond opens deployment nearby; Previous area restores the earlier view. | The event and unit panels show what happened and what the unit can do next. |
| **6. Sustain** | Wait for recovery, pay for service or expand? | Slow automatic ammunition and delayed healing restore surviving equipment; paid service is faster. Connected territory supports expansion. | EMPTY, setup/service states, supply coverage and credit costs remain visible. |
| **7. Review** | What should change in the next attempt? | A mission outcome and cumulative impact report show military losses, infrastructure damage and civilian panic. | The result follows scenario objectives; civilian panic does not decide victory. |

## Choices that stay with the player

Automatic defence is limited to eligible identified targets in current coverage; it does not turn every formation into an unlimited weapon. Ammunition, cooldowns, damage, setup and truce states still matter. I kept cruise launches deliberate and reconnaissance orders free from automatic surface strikes.

A closed river crossing is a decision point: choose another traversable route or send available engineers to build. Destroyed bridge assets close crossings again. Capturing a sector without maintaining connection does not grant the same forward deployment and income benefits.

Diplomatic offers expose accept/reject consequences before the decision. A stand-down temporarily stops new fire and reinforcements while movement and upkeep continue; weapons already in flight still resolve. Civilian protection and relief reduce panic, which is reported separately from military objectives.

## A useful first-session path

Start Shield on Easy, deploy a defence near a friendly post, and watch detection and automatic engagement. Select a friendly aircraft and give it a destination. Use an attack alert to inspect an incident, then return to the previous area. Observe ammunition recovery or pay for faster resupply. Finish or end the operation and read the report.

This is an onboarding path to validate, not a claim that new players have already completed it without help. See [measurement](../docs/MEASUREMENT.md) for the first-session questions I would test.
