# Platform and unit design

[Portfolio index](../README.md)

**Scope:** this is the design roster derived from the product brief and expansion requests. It groups roles for readability; it is **not the full generated 36-type implementation catalogue**. Exact type IDs, availability, runtime sprites and numeric values await source import.

All names are platform-inspired game archetypes. No verified inventory, radar capability, speed, range or probability of interception is claimed. The icons below are original documentation symbols, not official or exact runtime silhouettes.

| Side / scope | Icon | Platform or role | Purpose | Balancing constraint |
| --- | --- | --- | --- | --- |
| India | ![sam](../images/icons/sam.svg) | S-400-inspired | Area air defence | Broad abstract coverage; costly deployment, finite ammunition, radar/supply support and relocation delay. |
| India | ![sam](../images/icons/sam.svg) | Akash-inspired | Supporting air defence | Protect local objectives; trades coverage for support cost and mobility. |
| India | ![fighter](../images/icons/fighter.svg) | Rafale-inspired | Multirole aircraft | Flexible mission choice; endurance, readiness and ammunition constrain persistence. |
| India | ![fighter](../images/icons/fighter.svg) | Su-30MKI-inspired | Heavy fighter | A heavier air role balanced by higher support demand; no guaranteed superiority. |
| India | ![fighter](../images/icons/fighter.svg) | Tejas-inspired | Light fighter | A lighter air role with limited endurance and payload in gameplay. |
| India | ![missile](../images/icons/missile.svg) | BrahMos-inspired | Conventional strike | A platform-inspired strike role requested in the expanded brief; costly finite shots against eligible fictional assets. |
| Pakistan | ![fighter](../images/icons/fighter.svg) | JF-17-inspired | Multirole aircraft | Flexible opposing air role; fictional balance values and support needs. |
| Pakistan | ![fighter](../images/icons/fighter.svg) | F-16-inspired | Fighter | Opposing fighter role with finite mission resources. |
| Pakistan | ![fighter](../images/icons/fighter.svg) | J-10C-inspired | Fighter | Alternative opposing air role; no real-world performance ranking implied. |
| Pakistan | ![sam](../images/icons/sam.svg) | HQ-9/P-inspired | Area air defence | Opposing defensive role balanced through supply, ammunition and readiness. |
| Shared role | ![drone](../images/icons/drone.svg) | Reconnaissance drone | Detection | Reveals contacts; trades combat power for information. |
| Shared role | ![drone](../images/icons/drone.svg) | Strike drone | Drone combat | Adds a drone attack role with finite capacity and counter-drone interaction. |
| Shared role | ![counterdrone](../images/icons/counterdrone.svg) | Counter-drone system | Drone defence | Specialized protection with resource and coverage limits. |
| Shared role | ![radar](../images/icons/radar.svg) | Radar vehicle | Identification/support | Supports detection and defence; depends on positioning and protection. |
| Shared role | ![logistics](../images/icons/logistics.svg) | Logistics unit | Sustainment | Supplies or replenishes supported forces; competes for resources and requires protection. |
| Shared role | ![engineer](../images/icons/engineer.svg) | River-crossing engineers | Mobility support | Enable eligible crossings; route utility rather than a universal terrain bypass. |
| Shared role | ![armor](../images/icons/armor.svg) | Armour | Ground manoeuvre | Ground pressure with terrain, route and supply dependencies. |
| Shared role | ![infantry](../images/icons/infantry.svg) | Infantry | Ground control | Supports holding and capturing sectors; requires protection and sustainment. |
| Shared role | ![artillery](../images/icons/artillery.svg) | Artillery | Ground support | A supporting fires role; readiness, ammunition and fictional targeting rules apply. |
| Shared role | ![ship](../images/icons/ship.svg) | Fleet | Naval control | Sea movement and supporting naval decisions; role statistics remain fictional. |
| Installation | ![base](../images/icons/base.svg) | Airbase / forward base | Basing and deployment | Fictional installation supporting eligible deployment, repair or mission return. |
| Installation | ![logistics](../images/icons/logistics.svg) | Logistics hub | Resource support | Creates a sustainment objective and a protection decision. |
| Installation | ![base](../images/icons/base.svg) | Command post | Objective/control | A fictional military objective whose importance is defined by the scenario. |

## Specification contract

Every implemented type should declare: stable ID, side/availability, role, icon reference, cost, health, readiness, ammunition, supply dependency, deployment/relocation delay, mission endurance where relevant, eligible orders and abstract detection/engagement behaviour. Store game units explicitly; never substitute real-world technical data.

## Air defence detail

Placement previews use game distances. Batteries require eligible sectors and have deployment/relocation states, finite simultaneous engagements, reload/resupply time, support dependencies, damage and repair states. Coverage is a strategic trade-off, not a protection guarantee.

## Aircraft and targeting detail

Aircraft accept patrol, reconnaissance, intercept and eligible fictional-objective missions. Fuel/endurance, ammunition and return-to-base behaviour constrain persistence. Detection and identification precede eligible engagement; stale contacts should be visibly uncertain.

## Completion gap

The prepared package was recorded as containing source-generated `weapons.json`, full per-type references and runtime icon crops. Those bytes are not available through the disconnected workspace in this pass. This role document must not be mistaken for a verified numeric export.

Machine-readable design roster: [platforms-design.json](platforms-design.json). See [visual key](ICON-INDEX.md).
