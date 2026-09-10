# Border Command

### Browser strategy game · Product development portfolio

**By Chaitanya Kulkarni**

Border Command is a playable real-time strategy game about balancing defence, movement, reconnaissance and limited resources. Players command India in a fictional conventional conflict against a computer-controlled Pakistan, using recognizable geography and platform-inspired units.

**[▶ Play Border Command](https://border-command.chaitanyakulkarni841.chatgpt.site)** · [Quick controls](docs/CONTROLS.md) · [Product requirements](docs/PRD.md) · [Version evolution](versions/README.md)

> Fictional scenario • Abstracted capabilities. Military installations, deployments and performance values are fictional. “Real-time” describes the simulation, not live intelligence.

## The product question

**How can someone understand the game immediately, yet discover enough depth to keep playing?**

The project explores this through direct click commands, pinned **Forces & Build**, clear terrain obstacles, connected territories and progressively richer scenarios. Its evolution shows how creator feedback became product priorities, interaction choices and engineering checks.

## Product development portfolio

Read the first three sections for the problem and decisions; continue for requirements, specifications and delivery evidence. PDFs are reserved for future uploads.

| Portfolio section | Focus | Documentation | 
| --- | --- | --- | 
| **00 · Project context** | Intended player, problem, value proposition and scope. | [Overview](docs/OVERVIEW.md) | 
| **01 · Discovery & experience** | Player needs, first-session journey and friction hypotheses. | [Experience design](docs/UX.md) |
| **02 · Product decisions** | Priorities, alternatives and explicit trade-offs. | [Decision record](docs/PRODUCT-DECISIONS.md) | 
| **03 · Product definition** | Requirements, user stories and acceptance criteria. | [PRD](docs/PRD.md) | [Reserved](pdfs/) |
| **04 · Architecture & constraints** | Simulation, rendering, configuration and save boundaries. | [Architecture](docs/ARCHITECTURE.md) | 
| **05 · Platforms & visual language** | Platform-inspired roles, balancing principles and icon key. | [Unit specifications](specs/WEAPONS.md) | 
| **06 · Scenarios & player loop** | Objectives, pacing and replayable decisions. | [Scenarios](specs/SCENARIOS.md) · [Player loop](workflows/player-loop.md) | 
| **07 · Evaluation & testing** | Recorded engineering checks and proposed usability study. | [Validation](docs/VALIDATION.md) · [Measurement](docs/MEASUREMENT.md) | 
| **08 · Evolution & delivery** | Five development stages, release approach and remaining gaps. | [Versions](versions/README.md) · [Release workflow](workflows/release.md) |
| **09 · Adoption & play** | Fast-start controls and useful feedback. | [Player guide](docs/CONTROLS.md) |
| **10 · Outcomes & next steps** | Delivered artifacts, unproven hypotheses and next priorities. | [Roadmap](docs/ROADMAP.md) | 

## What the current game explores

- Ground, air, naval, drone and air-defence roles, with single-click attack orders.
- A larger theatre, named command views, terrain relief and highlighted crossings.
- Group movement, supply, sector capture, cinematic following and adjustable difficulty.
- A public browser experience with fictional scenarios and no required login.

Implementation records describe **15 scenarios, 29 player-deployable types and 36 total catalog types**. These are game-content counts, not real inventories. See [validation and limitations](docs/VALIDATION.md).

## Repository guide

| Folder | Purpose |
| --- | --- |
| [docs/](docs/) | Concise product narrative, PRD, UX, decisions and evaluation. |
| [specs/](specs/) | Platform roles, scenario requirements and visual specifications. |
| [images/](images/) | Original documentation icons; space for actual game captures. |
| [pdfs/](pdfs/) | Reserved for your PDFs; none added yet. |
| [templates/](templates/) | Reusable experiment, scenario and release templates. |
| [workflows/](workflows/) | Player loop and release process. |
| [versions/](versions/) | Development history and source provenance. |
| [game/](game/) | Source import status and connection to the playable release. |

**Repository status:** product documentation is available here. The full prepared source package has not yet been imported because the source workspace is disconnected. The public game above remains the playable reference.

This portfolio records creator-led iteration. It does not claim a completed user-research programme, proven engagement improvement or a bug-free release.
