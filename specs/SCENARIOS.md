# Scenarios and gameplay modes

[Portfolio index](../README.md) · [Player loop](../workflows/player-loop.md) · [Unit roles](WEAPONS.md)

I began with three operations—**Shield, Contested Skies and Command Campaign**—then expanded to 15. I wanted replayability to come from different decisions: protecting, scouting, escorting, capturing or building, rather than simply adding more enemies. The table describes the current configuration, not a claim that every scenario has been balanced through user testing.

![Operation selection with mission briefs and difficulty options](../images/gameplay/scenario-selection.jpg)

## The 15 operations

| Operation | What the player must achieve | Main decision | Time |
| --- | --- | --- | --- |
| **Shield** | Preserve at least two of three original command posts. | Concentrate defence or cover more approaches? | 10 min |
| **Contested Skies** | Reach 360 airspace control points, or lead at the deadline. | Sustain patrol coverage while managing endurance. | 12 min |
| **Command Campaign** | Disable all three original opposing command posts; preserve one friendly post. | Scout, commit forces and protect the home network. | 15 min |
| **Desert Spear** | Hold all three connected central land sectors together for 45 seconds. | Advance as a connected front or reinforce a vulnerable sector. | 11 min |
| **Ocean Sentinel** | Reach 300 sea-control points, or lead at the deadline. | Spread warships for control or concentrate for support. | 11 min |
| **Supply Corridor** | Deliver at least two of three marked supply columns to the rally zone. | Choose a traversable route and escort allocation. | 12 min |
| **Harbor Watch** | Bring both marked replenishment ships to the offshore rendezvous. | Protect slow support ships while contesting sea space. | 12 min |
| **Runway Denial** | Disable three designated fictional airfields; retain a command post. | Find current contacts and time aircraft recovery. | 13 min |
| **Distant Thunder** | Scout and disable two designated fictional military installations. | Spend scarce cruise ammunition on deliberate launches. | 12 min |
| **Iron Economy** | Earn 2,000 credits and finish two resource works plus an additional command base. | Invest in income or immediate protection. | 14 min |
| **Night Watch** | Identify all three designated military sites; retain a command post. | Improve observation under reduced visibility. | 10 min |
| **Monsoon Shield** | Preserve two original posts through reduced visibility and slower aircraft movement. | Adjust defensive coverage to weather. | 10 min |
| **Last Light** | Preserve the remaining command post through six waves. | Recover and reinforce between attacks. | 8 min |
| **Three Fronts** | Hold two connected land sectors, disable two marked airfields and retain a warship. | Allocate resources across competing objectives. | 15 min |
| **Open Command** | Explore the combined-arms systems; end the exercise when ready. | Experiment without a prescribed victory target. | Up to 30 min |

Exact settings are in [scenarios.json](scenarios.json); [catalog.ts](../game/lib/game/catalog.ts) defines content and [engine.ts](../game/lib/game/engine.ts) evaluates completion. These are fictional assets and deployments.

## Difficulty and shared rules

Easy provides more player resources and gentler opposing activity/damage. Normal uses the default balance. Hard tightens resources and increases activity/damage. Custom exposes resources, activity, damage, fog and starting forces. I kept difficulty in the simulation so changing it affects play rather than only a label.

Every operation shares unit readiness, target eligibility, automatic local defence, slow upkeep and optional paid service. Terrain and bridge status constrain ground travel. Connected territory provides forward deployment and income. Existing scenario works do not count as player-built industry for Iron Economy.

Deadlines use simulation time. Pause stops them, speed scales them and an accepted stand-down extends them. Losing all required original command posts ends the mission; escort missions also fail when too few required ships or columns survive. Air and sea control compare scores at timeout; Desert Spear must complete its 45-second hold, and other unfinished objective missions fail. Open Command draws on manual end or timeout, but losing all original command posts still causes defeat.

## Why the ending matters

I added one consistent [mission report](../images/gameplay/mission-report.jpg) across modes: damaged military assets, infrastructure damage/destruction, resources and civilian panic. Repair does not erase cumulative damage. Humanitarian consequences remain separate from victory, so players can understand what happened without treating panic as a scoring objective.

For a new operation, use the [scenario template](../templates/scenario-template.md): define a distinct decision, starting conditions, reachable victory/defeat and a target duration. Pacing and balance still need observed play sessions.
