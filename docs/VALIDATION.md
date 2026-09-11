# Validation and current limitations

[Portfolio index](../README.md)

## Current update: v0.7

Source revision **`689409166e478c6305636ab36b358751eb445f20`**, imported as v0.7. I recorded the release checks in the development workspace. The verified source adds coverage multipliers, passive upkeep, fictional infrastructure, cumulative mission reports and rendering interpolation. Results are recorded below; the remote GitHub workflow must be checked separately.

| Check | Status |
| --- | --- |
| Engine/world regressions, including maintenance and infrastructure | 79 passed |
| Built Worker HTML check | 1 passed |
| TypeScript check | Passed |
| Production build | Passed |
| Source-derived catalogue | 37 types / 29 tray-deployable; bridges are created through crossing engineering |

These **80 checks** belong to the current v0.7 source. I also captured the running command map, command-sector terrain, scenario selector and a completed mission report in the [gameplay gallery](../images/gameplay/README.md).

The previous v0.6 source, `83ea15d69ce1b9c33e5afc407c228582c09941df`, recorded 63 engine/world checks plus one built-HTML check, type checking and a production build. These 64 historical checks are not the v0.7 result. The GitHub workflow reruns `npm test` from `game/`; check its actual remote result separately.

## What is not established

- The captured browser session establishes only the views and interactions listed below; cross-browser, accessibility and touch QA remain open.
- The capture browser could not initialize WebGL for the optional 3D view. The 2D view remained playable; GPU compatibility still needs a device matrix.
- No observed user study, retention baseline, performance benchmark or business outcome is claimed.
- Automated checks do not establish complete scenario balance, intuitive controls or a bug-free game.
- Atlas SVG wrappers reference existing PNGs; use the HTML catalogue because image embedding may block external SVG resources.

## Browser capture record

| Observed in the capture session | Result |
| --- | --- |
| Command map, pinned forces, unit selection and named command views | Rendered and navigated in the running game. |
| Scenario selection and Open Command setup | Opened with visible mission, difficulty, fog and seed controls. |
| Unattended local combat and map warnings | Units exchanged fire, warnings appeared and assets took damage. |
| Mission defeat and cumulative report | Reached naturally when the command base was lost; damage, infrastructure and panic totals displayed. |
| Optional 3D view | WebGL initialization unavailable in this browser; 2D terrain capture used. |

This was a capture session, not a controlled balance study. It does not validate every control, scenario or input method. The screenshots show a single run and are not engagement metrics.

![Actual cumulative mission report](../images/gameplay/mission-report.jpg)

## Manual acceptance tasks

| Task | Evidence to capture |
| --- | --- |
| Deploy and leave a formation holding | Eligible identified targets trigger local defence; coverage and cooldowns remain readable. |
| Exhaust ammunition and take damage | EMPTY is visible; slow replenishment and delayed healing progress; paid service is faster. |
| Attack fictional works and a bridge | Damage and panic are recorded; a destroyed span closes the route and engineering rebuilds it. |
| Complete a mission after repairs | The scoreboard retains cumulative damage and separately explains civilian impact. |
| Pan, select, follow and return | Smooth motion, correct gestures and no orientation loss or hidden-contact disclosure. |
| Inspect an attack and respond | Marker / J locates the incident; Respond exposes deployment; Previous area returns. |
| Pause, save, resume and restart | Upkeep/report state and timers remain consistent, including older saves. |
| Use 3D, small screen and touch | Readability, frame responsiveness and practical input. |

Record device, browser, scenario, seed and source revision. See [measurement](MEASUREMENT.md) for proposed product validation.
