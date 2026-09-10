# Product decisions

[Portfolio index](../README.md)

Border Command explores one product question: **can a first-time player make a meaningful command immediately, then discover strategic depth through play?** The design grew from repeated creator feedback; this is an iterative portfolio prototype, not evidence of a completed user-research programme.

## Player and job to be done

The intended player is curious about military strategy but unwilling to learn a dense control manual. Their job is: “Help me understand the situation, act confidently, and see why my decision mattered.” An experienced player should still find value in formations, supply, reconnaissance and replayable scenarios.

## Decisions and trade-offs

| Request or constraint | Product decision | Trade-off and next check |
| --- | --- | --- |
| Attacks required too many steps. | Select a friendly unit, then click an eligible enemy to issue an attack. | Faster input increases accidental-order risk; check selection and order feedback. |
| Forces and construction were difficult to find. | Keep **Forces & Build** prominent; provide quick deployment and map placement. | Persistent controls consume map space; check desktop and small-screen usability separately. |
| Navigation should feel familiar. | Ordinary drag pans; Cmd/Ctrl-drag selects multiple units; formations remain available. | Modified gestures are less discoverable; retain visible hints and practical touch controls. |
| A larger theatre should remain engaging. | Separate world-area scaling from unit movement and simulation time. | Longer routes can create idle time; assess pacing instead of assuming “larger” means “better.” |
| Terrain should affect decisions. | Highlight crossings and mountain hurdles, with engineers supporting river passage. | Constraints can feel arbitrary; explain blocked orders and show valid alternatives. |
| Realism should support playability. | Recognizable geography and platform-inspired units with fictional sites and normalized capabilities. | Sacrifices technical fidelity while supporting balance and avoiding operational-accuracy claims. |

## Prioritization

**Core promise:** start, deploy, select, move or attack, understand feedback, and reach an outcome. Reliability, discoverability and save/restart behaviour protect this promise.

**Depth:** connected sectors, logistics, fog of war, formations, drones and defence placement create choices after the basics are learned.

**Presentation:** terrain relief, unit silhouettes and cinematic following make action easier to read. These should earn their rendering cost; the command map remains the dependable fallback.

## Evidence and next decision

The record establishes implementation and creator-led iteration. It does not establish usability, retention or engagement improvement. Next, run an observed first-session test using [the measurement plan](MEASUREMENT.md); prioritize the most frequent failure before expanding the roster again.
