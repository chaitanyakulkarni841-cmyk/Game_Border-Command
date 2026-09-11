# User experience: simple actions, visible depth

[Portfolio index](../README.md) · [Controls reference](CONTROLS.md)

**My goal was to make the next action obvious and show complexity when it becomes relevant.** As the game grew, I kept asking whether a new player could understand what to do without instructions. Unnecessary attack steps, difficult navigation, hidden recruitment, missed battles and repeated maintenance clicks became the main problems I chose to solve.

![Border Command command map with pinned force controls and sector objectives](../images/gameplay/command-map.jpg)

*Command-map capture from the running game. It illustrates the available interface; it is not a usability-test result.*

## First-session journey

| Moment | Player’s question | Interface response |
| --- | --- | --- |
| Start | What am I trying to do? | A scenario objective, difficulty choice and Play Now. |
| Orient | Where am I and what is mine? | Distinct unit shapes, ownership colors, command views and visible gesture hints. |
| Deploy | How do I add a unit? | Pinned Forces & Build, role and cost information, eligible placement preview. |
| Command | How do I act? | Select a friendly formation; click terrain to move or an eligible enemy to attack. |
| Encounter | Must I command every shot? | Ready units defend locally; the inspector exposes ammunition, readiness and current orders. |
| Respond | Where is the attack, and what can I do? | Grouped alert → View attack / J → Respond. Previous area restores the earlier view. |
| Recover | Is the equipment empty or broken? | EMPTY labels, slow automatic resupply and delayed healing; faster paid service remains available. |
| Learn | What happened during the mission? | A scoreboard for asset damage, infrastructure and civilian impact, alongside the military result. |

## Progressive disclosure

I kept the first interaction focused on selection, movement, attack, deployment and pause. More experienced players can open formation settings, assign numbered groups, queue routes and toggle layers. This preserves depth without requiring every player to learn every control first.

I wanted terrain feedback near the decision. A blocked river crossing should explain the engineering requirement; mountain hurdles and valid routes should be visible. Deployment should show cost and eligibility before credits are spent. Errors should describe a next action rather than merely announce failure.

## Automation preserves agency

I added local defence and slow upkeep to remove repetitive work. They do not silently purchase reinforcements or relocate the player’s camera. An alert’s Respond action opens recruitment near the incident; the player still chooses and places the countermeasure. Manual attack orders, movement, repairs and resupply remain available.

I made the distinction visible: EMPTY applies only to armed equipment, so an unarmed radar or supply vehicle is not falsely labeled unusable. Damaged assets remain in the mission history even after recovery. Civilian-panic reporting provides context without determining victory.

## Orientation and visual continuity

Ordinary drag pans; Cmd/Ctrl-drag selects multiple formations. Cinematic following offers a return to the command view. Alerts preserve a previous camera area, so inspecting a battle does not erase the player’s working context.

Rendering blends known poses between simulation steps. It does not invent unseen enemy movement. Reduced-motion support, a 2D fallback and shape-plus-color encoding help preserve readability across presentation modes.

## What I would validate next

I would watch for accidental commands, overlooked selection modifiers, dense panels, missed EMPTY labels, lost camera orientation and terrain restrictions that feel arbitrary. Keyboard focus, touch, small-screen readability and GPU behavior require direct checks. [Measurement](MEASUREMENT.md) defines the first-session tasks; automated engine checks alone cannot establish intuitive play.

Implementation references: [recruitment](../game/app/recruitment.tsx), [battle alerts](../game/app/battle-alerts.tsx), [motion](../game/lib/game/motion.ts), [mission scoreboard](../game/app/mission-scoreboard.tsx).
