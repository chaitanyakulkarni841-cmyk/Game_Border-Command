# How Border Command evolved

[Portfolio index](../README.md) · [Product decisions](../docs/PRODUCT-DECISIONS.md) · [Current validation](../docs/VALIDATION.md)

I started with a request for a playable strategy game, then repeatedly changed the balance between detail and ease of use. The main question became: **can someone understand the controls immediately while still discovering meaningful depth?**

These are development milestones reconstructed from the source history and requirements. They are not published GitHub release tags, a user-research study or proof of improved retention.

## From complete loop to easier sustained play

| Version | What I wanted to improve | What changed | Trade-off I kept visible |
| --- | --- | --- | --- |
| **v0.1 · Foundation** | Turn the idea into a playable loop. | Initial map, platform roles, deployment, detection, combat and objectives. | Breadth would mean little unless deploy-to-outcome play worked first. |
| **v0.2 · Combined arms** | Create more reasons to replay. | Army and naval roles, richer terrain graphics and expansion to 15 operations. | More units and missions increase balance and learning demands. |
| **v0.3 · Direct command** | Make actions faster and units easier to recognize. | Click an eligible enemy to attack, richer unit graphics and 24 fictional airfields. | Removing a confirmation step makes selection and order feedback more important. |
| **v0.4 · Dynamic theatre** | Make the map matter beyond appearance. | 3D relief, cinematic following, connected fronts, drones, bridge engineering and diplomacy; 29 tray-deployable roles. | Additional systems need clear consequences and should not burden every interaction. |
| **v0.5 · Command scale** | Show a large theatre while keeping essentials easy to reach. | 20× land area, 3× physical movement, command views, pinned Forces & Build, drag navigation and crossing highlights. | Bigger space can create waiting and orientation problems. |
| **v0.6 · Local response** | Reduce routine commands and help players notice attacks. | World area reduced by 20%; physical detection/engagement ranges increased 25%; automatic local defence and grouped View/Respond/Previous area alerts. | Automation must respect explicit orders and fog while leaving decisions to the player. |
| **v0.7 · Sustained operations** | Reduce upkeep clicks and make mission consequences visible. | Fighter coverage 5× v0.6; S-400/Akash 4×; slow automatic resupply, delayed healing, EMPTY labels, attackable works/bridges, cumulative reports and interpolated motion. | Recovery must stay slower than paid service, and repair must not erase damage history. |

The current world retains **16× baseline area and 3× physical movement**. Later range multipliers are scoped by platform; they do not imply real-world performance or apply to every drone/support unit.

## The thinking behind the revisions

I initially asked for more realism, machines and scenarios. As the game expanded, my requests shifted toward fewer unnecessary clicks: keep important controls pinned, make drag navigation familiar, attack directly, automate immediate defence and let alerts take the player to the action. I then reduced the expanded map rather than treating size as an end in itself.

The latest changes follow the same direction. Slow upkeep reduces repetitive maintenance, while paid service preserves a timing decision. Bridges connect visual infrastructure to route availability. The mission report makes accumulated consequences visible even after equipment heals. Civilian panic remains separate from the military win condition.

## Source provenance

| Version | Original source revision |
| --- | --- |
| v0.1 | `e2bb17e53a2dd215fd2b895408a61aef76d9c972` |
| v0.2 | `247e1451a690cd415b07df6beba657d9b4d173c7` |
| v0.3 | `73cfb6036a6e6b09773216de75343057fcfc8570` |
| v0.4 | `cddb11163b195052b615d731412cc181b13680e7` |
| v0.5 | `fa4b02c658bfe3ff335a23248e849fc85d3913cf` |
| v0.6 | `83ea15d69ce1b9c33e5afc407c228582c09941df` |
| v0.7 | `689409166e478c6305636ab36b358751eb445f20` |

These identify the original development repository, not invented commits in this portfolio repository. Machine-readable provenance is in [history.json](history.json); the current snapshot is under [game/](../game/).

v0.7 recorded **80 automated checks**, type checking and a production build. Those checks establish specific implementation behaviour, not intuitive controls or balanced missions. My next evidence gap is first-session observation, interaction checks and scenario pacing; see [measurement](../docs/MEASUREMENT.md).

The v0.7 snapshot also corrects the theatre label to 16×, matching the already implemented 20% area reduction. This is a display correction, not another change to map size.
