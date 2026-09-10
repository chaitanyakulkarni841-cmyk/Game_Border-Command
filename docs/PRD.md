# Product requirements

[Portfolio index](../README.md)

**Product:** Border Command  
**Goal:** a first-time player acts confidently while discovering strategic depth.  
**Reference:** the latest edited product brief and subsequent control, scale and portfolio requests.  
**Status:** this document defines intended behaviour; the [validation record](VALIDATION.md) separates recorded implementation checks from unverified experience requirements.

## Experience

A complete browser strategy game places the player in command of India against a computer-controlled Pakistan in fictional conventional scenarios. The core loop is **deploy → detect → command → resolve → resupply → complete objectives**. The default session should take approximately 10–15 minutes.

No required login, paid APIs, live intelligence or backend dependency for core play. Use recognizable regional geography, fictional military sites and normalized platform statistics. Cities are not selectable attack targets. Display “Fictional scenario • Abstracted capabilities.”

## Requirements and acceptance

| Priority | Requirement | Acceptance criterion |
| --- | --- | --- |
| P0 | Immediate play | Play Now opens a functioning scenario with an objective, resources and controllable units. |
| P0 | Direct commands | Selecting friendly forces then clicking an eligible detected enemy issues an attack without an additional attack button. Invalid orders explain why. |
| P0 | Familiar navigation | Ordinary drag pans; Cmd/Ctrl-drag selects multiple units. Zoom and command views retain orientation. |
| P0 | Visible forces and build | A pinned entry exposes force selection, unit roles, costs and eligible placement. |
| P0 | Defence deployment | An S-400-inspired battery previews abstract coverage, deploys only where eligible, and has relocation delay, ammunition, damage and supply constraints. |
| P0 | Meaningful combat | Detection, identification and engagement are separate; ammunition, readiness, supply and damage influence outcomes. |
| P0 | Active opposition | AI pursues objectives and makes decisions from its own detected information under fog. Difficulty changes actual behaviour and resources. |
| P0 | Reliable session | Stable timestep, seeded initialization, pause/speed, clean restart, local save/resume and explicit victory/defeat. |
| P1 | Army control | Multi-selection, numbered groups, queued destinations and formation movement remain usable alongside direct attacks. |
| P1 | Territory | Connected sector capture changes ownership, resource access and deployment opportunities. |
| P1 | Terrain and scale | Larger land area and faster movement are tuned independently; crossings and mountain hurdles are highlighted. Engineering equipment enables eligible river passage. |
| P1 | Combined arms | Aircraft, army, naval, drone, counter-drone, radar, logistics and air-defence roles create support trade-offs. |
| P1 | Cinematic following | Follow aircraft, missiles or fleets and return immediately to the command map. |
| P1 | Context events | Diplomatic accept/reject decisions have explained consequences. Civilian panic is contextual and does not decide military victory. |
| P1 | Readability | Distinct symbols, movement paths, missile effects, layer controls, event feedback and practical touch controls. |
| P2 | Further presentation | More advanced 3D detail follows stability, clarity and performance validation. |

P0 protects the core promise; P1 adds depth; P2 requires evidence of benefit.

## Map and visual constraints

Show India and Pakistan with surrounding context, coastlines, mountain relief, major contextual cities and neutral approximate disputed boundaries, including the LoC. Use bundled geography or an offline fallback. Terrain and defence circles express gameplay relationships, not verified real-world protection or navigation data.

## Balance and scenarios

Easy slows opposing decisions and provides more player resources; Normal balances them; Hard increases activity and coordination. Custom controls cover resources, activity, fog, damage and starting forces.

The baseline scenarios are **Shield**, **Contested Skies** and **Command Campaign**. Expanded scenarios vary objectives and constraints rather than only increasing unit counts. No platform guarantees victory.

## User stories

- As a new player, I can select, deploy and command without reading a manual.
- As a returning player, I can combine reconnaissance, supply and terrain choices.
- As a player interrupted mid-session, I can resume or restart cleanly.
- As a reviewer, I can trace a requirement to a decision, implementation record and verification status.

## Release definition

Build and type checks pass; deterministic simulation regressions pass; public entry works; no blocking runtime errors in the tested flow; source and documentation agree. Browser, GPU, touch and usability checks must be reported separately. Passing automated checks never warrants “no bugs.”
