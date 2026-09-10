# Experience design

[Portfolio index](../README.md)

## Design principle

**Make the next action obvious; reveal depth when it becomes relevant.**

The creator repeatedly requested fewer command steps, easier map navigation, persistent force/build access and more readable terrain. These are product inputs, not findings from an external user study.

## First-session journey

| Moment | Player question | Experience requirement |
| --- | --- | --- |
| Entry | What am I trying to do? | Play link, clear scenario objective and difficulty choice. |
| Orientation | Where am I and what is mine? | Distinct unit shapes, command views, ownership and visible control hints. |
| Deployment | How do I add a unit? | Pinned Forces & Build, understandable roles, cost and eligible placement preview. |
| Command | How do I make something happen? | Select a friendly unit; click terrain to move or an eligible enemy to attack. |
| Feedback | Did it work? | Order/path feedback, ammunition/readiness changes and a concise explanation if rejected. |
| Learning | Why did that happen? | On-demand unit details, supply state and highlighted terrain obstacles. |
| Continuation | What should I try next? | Objective progress, explicit outcome and replayable scenarios. |

## Progressive disclosure

Keep selection, movement, attack, deployment and pause visible. Put detailed statistics, formations, queued routes and layer controls one interaction deeper. Show a constraint when it matters: a blocked river crossing should explain the engineering requirement at the order location.

## Interaction rules

- Ordinary drag navigates the map; Cmd/Ctrl-drag bulk-selects.
- Selection must remain visually distinct from an issued order.
- Single-click attacks apply only to eligible detected fictional combat targets.
- Placement previews must explain cost and eligibility before spending.
- Following a unit must offer an immediate return to the command map.
- Forces and construction stay discoverable when other panels change.

## Inclusive use

Use shape and labels alongside colour. Preserve legible text, practical touch selection, reduced-motion support and readable selected-unit panels. Mobile gestures, keyboard focus and screen-size behaviour require direct validation; they are not established by engine tests.

## Risks to observe

Accidental orders; missed selection modifiers; excessive panel density; losing orientation in cinematic view; idle travel time; terrain restrictions perceived as arbitrary. Record these in the [first-session study](MEASUREMENT.md) before adding more interface controls.
