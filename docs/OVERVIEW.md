# Border Command: product context

[Portfolio index](../README.md) · [Play the game](https://border-command.chaitanyakulkarni841.chatgpt.site)

**I wanted to build a strategy game that someone could open, understand and start playing immediately—while still discovering depth as they played.** Border Command puts the player in command of India in fictional conventional scenarios against a computer-controlled Pakistan. My main challenge was making the first useful action obvious without removing the decisions that make strategy interesting.

## Intended player and need

I designed primarily for a strategy-curious player who wants to start immediately. I also wanted an experienced player to find depth in reconnaissance, terrain, connected territory and combined forces. These are my intended audiences; I have not validated them through a market study.

**Job to be done:** “When I open the game, help me understand the situation, make a purposeful decision and see its effect without studying a manual.”

As I iterated, I kept returning to the same friction: too many attack steps, awkward map navigation, hard-to-find recruitment, slow movement, missed warnings and repetitive upkeep. That led me toward **direct control with helpful automation**.

## The product in one loop

| Step | Player experience | Underlying depth |
| --- | --- | --- |
| Orient | Pick a scenario and difficulty; see the objective. | Fifteen missions vary goals, weather, force focus and duration. |
| Deploy | Open Forces & Build, choose a role and place a formation. | Cost, terrain, connected territory and deployment delay constrain placement. |
| Act | Select a friendly unit; click a destination or eligible enemy. | Detection, target compatibility, supply, ammunition and cooldown determine execution. |
| Respond | Inspect a map alert and jump to the incident. | Local defence handles nearby threats; the player decides where to reinforce. |
| Recover and learn | Wait for slow upkeep or purchase faster service; review the mission report. | Time and credits remain competing resources; historical damage survives repairs. |

The roster contains **37 configured types**, including 29 available in the player’s deployment tray; bridges are created through crossing engineering. See the [platform catalogue](../specs/WEAPONS.md) and [scenario catalogue](../specs/SCENARIOS.md) for the exact inventory.

## What I focused on

- **Product definition:** turning an ambitious realism goal into a playable loop and clear acceptance criteria.
- **User-centered iteration:** connecting friction in the experience to specific controls, automation and feedback.
- **System behavior:** deciding what the opponent can know, what units can do automatically and what should stay under player control.
- **Systems judgment:** balancing immersion, fairness, performance, save compatibility and maintainable configuration.

The [product decisions](PRODUCT-DECISIONS.md) explain the trade-offs I made. [AI and systems](AI-AND-SYSTEMS.md) covers the opponent, information boundaries and evaluation approach.

## Boundaries and next evidence

I chose recognizable geography, fictional military sites and normalized capabilities. Cities are contextual civilian centers, not selectable targets. Real inventories, live intelligence, operational targeting and nuclear weapons are outside scope. The optional relief view is a stylized 3D presentation, with a playable 2D fallback.

The repository records implementation and release checks. I have not yet measured enjoyment, retention or usability improvement. My next question is whether unfamiliar players can complete the core loop within two minutes without coaching; the [measurement plan](MEASUREMENT.md) makes that test concrete.
