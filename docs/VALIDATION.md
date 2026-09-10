# Validation and current limitations

[Portfolio index](../README.md)

## Recorded evidence

The preceding development session recorded the following for source revision `fa4b02c658bfe3ff335a23248e849fc85d3913cf`:

| Check | Recorded result | What it supports |
| --- | --- | --- |
| Engine/world automated checks | 54 passed | Covered deterministic simulation and world regressions. |
| Built Worker HTML check | 1 passed | Checked the built entry response. |
| TypeScript check | Passed | Static type consistency at that revision. |
| Production build | Passed | The release compiled. |
| Public deployment | Succeeded | A playable release was published at the README link. |
| Prepared package links and SVGs | Checked | Relative documentation links and vector syntax resolved in the prepared package. |

These are historical records from the preparation session, not tests rerun against this documentation commit. Full test output and the source package must be imported before this GitHub repository can reproduce the suite.

## What is not established

- No browser interaction, GPU, cross-browser, accessibility or touch QA was completed in that verification pass.
- No observed user study, retention baseline, performance benchmark or business outcome is claimed.
- Automated checks do not prove that every requirement is implemented, every scenario is balanced or the game has no bugs.
- The documentation icon key describes roles; it is not a pixel-exact export of the runtime sprite atlas.
- Exact source-derived numerical weapon values and the complete 36-type catalogue are awaiting source import.

## Manual acceptance tasks

| Task | Evidence to capture |
| --- | --- |
| Begin, deploy and issue a single-click attack | Accepted order, visible feedback and no blocking error. |
| Drag-pan and Cmd/Ctrl-drag select | Correct gesture separation and readable selected state. |
| Relocate an air-defence battery | Delay, supply and ammunition state remain consistent. |
| Cross a river with engineering support | Invalid route explained; eligible route completes. |
| Pause, save, resume and restart | State remains valid and timers behave consistently. |
| Complete win and loss paths | Objective-specific outcomes and usable replay controls. |
| Disable external map access | Bundled fallback remains playable. |
| Use cinematic return, small screen and touch | Orientation, legibility and practical input remain intact. |

Record device, browser, scenario, seed and source revision with every result. Prioritize a failed core-loop task before optional visual work. See [measurement](MEASUREMENT.md) for product validation.
