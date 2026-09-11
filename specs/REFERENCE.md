# Unit and weapon catalog

All **37 catalog types** are documented here: 29 tray-deployable types, 7 opposing-only types and 1 engineering-created bridge type. 11 entries appear on both sides; the opposing AI uses 19 types in total. Weapons, reconnaissance, logistics, engineering and installations are all included.

**All specifications are fictional game-balance values copied from the code.** Real-world-inspired names do not represent real weapon performance or current service inventory. Player and opposing labels describe this game's implementation.

[Structured JSON](weapons.json) · [Atlas icon index](ICON-INDEX.md) · [Browser atlas catalog](unit-catalog.html)

The tables show base catalog values. Cost is in fictional credits; HP and ammunition describe a formation. Range, sight and speed are abstract catalog values, not kilometers or real speeds. The engine applies world scaling, weather, upgrades and other game modifiers. Expand a type for every source field and icon details.

## Army (15)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![S-400](../images/icons/glyph/s400.svg) | [S-400](#s400) | Player | Sector air & vehicle defence | 280 | 150 | 12 | 130 | 4 |
| ![Akash](../images/icons/glyph/akash.svg) | [Akash](#akash) | Player | Mobile air & vehicle defence | 150 | 110 | 10 | 78 | 5 |
| ![Counter-drone vehicle](../images/icons/glyph/counterdrone.svg) | [Counter-drone vehicle](#counterdrone) | Both sides | Drone disruption & point defence | 160 | 130 | 18 | 75 | 7 |
| ![River-crossing engineers](../images/icons/glyph/bridgelayer.svg) | [River-crossing engineers](#bridgelayer) | Player | Construct pontoon crossings | 180 | 160 | 0 | 0 | 7 |
| ![Radar station](../images/icons/glyph/radar.svg) | [Radar station](#radar) | Both sides | Detection & identification | 120 | 90 | 0 | 0 | 4 |
| ![Supply column](../images/icons/glyph/logistics.svg) | [Supply column](#logistics) | Both sides | Mobile resupply support | 100 | 110 | 0 | 110 | 8 |
| ![Infantry company](../images/icons/glyph/infantry.svg) | [Infantry company](#infantry) | Both sides | Capture & hold sectors | 110 | 180 | 24 | 38 | 7 |
| ![T-90 formation](../images/icons/glyph/t90.svg) | [T-90 formation](#t90) | Player | Mobile heavy armour | 250 | 260 | 16 | 58 | 9 |
| ![Arjun formation](../images/icons/glyph/arjun.svg) | [Arjun formation](#arjun) | Player | Heavy assault armour | 290 | 320 | 14 | 62 | 6 |
| ![Mechanized infantry](../images/icons/glyph/bmp.svg) | [Mechanized infantry](#bmp) | Player | Fast sector occupation | 180 | 190 | 18 | 43 | 11 |
| ![K9-inspired battery](../images/icons/glyph/artillery.svg) | [K9-inspired battery](#artillery) | Both sides | Long-range ground support | 240 | 120 | 10 | 125 | 5 |
| ![Combat engineers](../images/icons/glyph/engineer.svg) | [Combat engineers](#engineer) | Player | Establish forward bases | 95 | 100 | 6 | 28 | 8 |
| ![BrahMos-inspired battery](../images/icons/glyph/brahmos.svg) | [BrahMos-inspired battery](#brahmos) | Player | Player-controlled cruise strike | 440 | 140 | 3 | 410 | 5 |
| ![HQ-9/P](../images/icons/glyph/hq9.svg) | [HQ-9/P](#hq9) | Opposing AI | Long-range air defence | 260 | 140 | 12 | 115 | 4 |
| ![Al-Khalid formation](../images/icons/glyph/alkhalid.svg) | [Al-Khalid formation](#alkhalid) | Opposing AI | Armoured formation | 240 | 250 | 16 | 55 | 9 |

<a id="s400"></a>
<details>
<summary><strong>S-400</strong> · Sector air &amp; vehicle defence</summary>

![S-400](../images/icons/glyph/s400.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | s400 | Availability | Player |
| Branch | army | Domain | land |
| Cost | 280 | Health | 150 |
| Ammo | 12 | Range | 130 |
| Vision | 155 | Speed | 4 |
| Damage | 38 | Cooldown | 5 s |
| Members | 4 | Formation | launchers |
| Income | 0 credits/s | Slots | 2 |
| Targets | air, land | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | ShieldCheck |

Unmodified movement: 3.7 map units/s. Scaled base range: 200.434 map units. Clear-weather detection: 238.979 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1032, y=264, width=240, height=240`; heading correction **180°**. Shared visual crop: `hq9`.

- Detection and engagement radii are multiplied by 4 relative to v0.6; the base fields remain raw catalog values.
- Fictional land engagement is restricted to armed, non-structure ground units. This is a gameplay capability, not a claim about real equipment.
- Without an operational same-team radar within 230 map units, effective range is multiplied by 0.78.

</details>

<a id="akash"></a>
<details>
<summary><strong>Akash</strong> · Mobile air &amp; vehicle defence</summary>

![Akash](../images/icons/glyph/akash.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | akash | Availability | Player |
| Branch | army | Domain | land |
| Cost | 150 | Health | 110 |
| Ammo | 10 | Range | 78 |
| Vision | 105 | Speed | 5 |
| Damage | 28 | Cooldown | 4 s |
| Members | 4 | Formation | launchers |
| Income | 0 credits/s | Slots | 1 |
| Targets | air, land | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Shield |

Unmodified movement: 4.625 map units/s. Scaled base range: 120.261 map units. Clear-weather detection: 161.889 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1288, y=264, width=240, height=240`; heading correction **180°**. 

- Detection and engagement radii are multiplied by 4 relative to v0.6; the base fields remain raw catalog values.
- Fictional land engagement is restricted to armed, non-structure ground units. This is a gameplay capability, not a claim about real equipment.

</details>

<a id="counterdrone"></a>
<details>
<summary><strong>Counter-drone vehicle</strong> · Drone disruption &amp; point defence</summary>

![Counter-drone vehicle](../images/icons/glyph/counterdrone.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | counterdrone | Availability | Both sides |
| Branch | army | Domain | land |
| Cost | 160 | Health | 130 |
| Ammo | 18 | Range | 75 |
| Vision | 135 | Speed | 7 |
| Damage | 20 | Cooldown | 3 s |
| Members | 2 | Formation | vehicles |
| Income | 0 credits/s | Slots | 1 |
| Targets | air | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | ShieldCheck |

Unmodified movement: 6.476 map units/s. Scaled base range: 28.909 map units. Clear-weather detection: 52.036 map units.

Atlas: `game/public/assets/new-units.png`; crop `x=1024, y=0, width=512, height=512`; heading correction **0°**. 

- Despite the air target-domain flag, canHit restricts this unit to drone, armeddrone and interceptordrone targets.

</details>

<a id="bridgelayer"></a>
<details>
<summary><strong>River-crossing engineers</strong> · Construct pontoon crossings</summary>

![River-crossing engineers](../images/icons/glyph/bridgelayer.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | bridgelayer | Availability | Player |
| Branch | army | Domain | land |
| Cost | 180 | Health | 160 |
| Ammo | 0 | Range | 0 |
| Vision | 85 | Speed | 7 |
| Damage | 0 | Cooldown | 5 s |
| Members | 3 | Formation | vehicles |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Wrench |

Unmodified movement: 6.476 map units/s. Scaled base range: 0 map units. Clear-weather detection: 32.763 map units.

Atlas: `game/public/assets/new-units.png`; crop `x=0, y=512, width=512, height=512`; heading correction **0°**. 

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="radar"></a>
<details>
<summary><strong>Radar station</strong> · Detection &amp; identification</summary>

![Radar station](../images/icons/glyph/radar.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | radar | Availability | Both sides |
| Branch | army | Domain | land |
| Cost | 120 | Health | 90 |
| Ammo | 0 | Range | 0 |
| Vision | 195 | Speed | 4 |
| Damage | 0 | Cooldown | 0 s |
| Members | 1 | Formation | unit |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Radar |

Unmodified movement: 3.7 map units/s. Scaled base range: 0 map units. Clear-weather detection: 75.163 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=264, y=520, width=240, height=240`; heading correction **180°**. 

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="logistics"></a>
<details>
<summary><strong>Supply column</strong> · Mobile resupply support</summary>

![Supply column](../images/icons/glyph/logistics.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | logistics | Availability | Both sides |
| Branch | army | Domain | land |
| Cost | 100 | Health | 110 |
| Ammo | 0 | Range | 110 |
| Vision | 65 | Speed | 8 |
| Damage | 0 | Cooldown | 0 s |
| Members | 6 | Formation | trucks |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Truck |

Unmodified movement: 7.401 map units/s. Scaled base range: 42.4 map units. Clear-weather detection: 25.054 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=520, y=520, width=240, height=240`; heading correction **180°**. 

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="infantry"></a>
<details>
<summary><strong>Infantry company</strong> · Capture &amp; hold sectors</summary>

![Infantry company](../images/icons/glyph/infantry.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | infantry | Availability | Both sides |
| Branch | army | Domain | land |
| Cost | 110 | Health | 180 |
| Ammo | 24 | Range | 38 |
| Vision | 90 | Speed | 7 |
| Damage | 20 | Cooldown | 3.5 s |
| Members | 80 | Formation | troops |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | UsersRound |

Unmodified movement: 6.476 map units/s. Scaled base range: 14.647 map units. Clear-weather detection: 34.691 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=776, y=520, width=240, height=240`; heading correction **0°**. 

</details>

<a id="t90"></a>
<details>
<summary><strong>T-90 formation</strong> · Mobile heavy armour</summary>

![T-90 formation](../images/icons/glyph/t90.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | t90 | Availability | Player |
| Branch | army | Domain | land |
| Cost | 250 | Health | 260 |
| Ammo | 16 | Range | 58 |
| Vision | 100 | Speed | 9 |
| Damage | 40 | Cooldown | 5 s |
| Members | 6 | Formation | tanks |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | CarFront |

Unmodified movement: 8.326 map units/s. Scaled base range: 22.356 map units. Clear-weather detection: 38.545 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=8, y=264, width=240, height=240`; heading correction **0°**. 

</details>

<a id="arjun"></a>
<details>
<summary><strong>Arjun formation</strong> · Heavy assault armour</summary>

![Arjun formation](../images/icons/glyph/arjun.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | arjun | Availability | Player |
| Branch | army | Domain | land |
| Cost | 290 | Health | 320 |
| Ammo | 14 | Range | 62 |
| Vision | 90 | Speed | 6 |
| Damage | 45 | Cooldown | 6 s |
| Members | 6 | Formation | tanks |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | CarFront |

Unmodified movement: 5.55 map units/s. Scaled base range: 23.898 map units. Clear-weather detection: 34.691 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=264, y=264, width=240, height=240`; heading correction **0°**. 

</details>

<a id="bmp"></a>
<details>
<summary><strong>Mechanized infantry</strong> · Fast sector occupation</summary>

![Mechanized infantry](../images/icons/glyph/bmp.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | bmp | Availability | Player |
| Branch | army | Domain | land |
| Cost | 180 | Health | 190 |
| Ammo | 18 | Range | 43 |
| Vision | 110 | Speed | 11 |
| Damage | 26 | Cooldown | 4 s |
| Members | 8 | Formation | vehicles |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Truck |

Unmodified movement: 10.176 map units/s. Scaled base range: 16.574 map units. Clear-weather detection: 42.4 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=520, y=264, width=240, height=240`; heading correction **0°**. 

</details>

<a id="artillery"></a>
<details>
<summary><strong>K9-inspired battery</strong> · Long-range ground support</summary>

![K9-inspired battery](../images/icons/glyph/artillery.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | artillery | Availability | Both sides |
| Branch | army | Domain | land |
| Cost | 240 | Health | 120 |
| Ammo | 10 | Range | 125 |
| Vision | 70 | Speed | 5 |
| Damage | 48 | Cooldown | 10 s |
| Members | 4 | Formation | guns |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Crosshair |

Unmodified movement: 4.625 map units/s. Scaled base range: 48.181 map units. Clear-weather detection: 26.982 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=776, y=264, width=240, height=240`; heading correction **0°**. 

</details>

<a id="engineer"></a>
<details>
<summary><strong>Combat engineers</strong> · Establish forward bases</summary>

![Combat engineers](../images/icons/glyph/engineer.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | engineer | Availability | Player |
| Branch | army | Domain | land |
| Cost | 95 | Health | 100 |
| Ammo | 6 | Range | 28 |
| Vision | 85 | Speed | 8 |
| Damage | 10 | Cooldown | 5 s |
| Members | 24 | Formation | engineers |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | Wrench |

Unmodified movement: 7.401 map units/s. Scaled base range: 10.793 map units. Clear-weather detection: 32.763 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1032, y=520, width=240, height=240`; heading correction **180°**. 

</details>

<a id="brahmos"></a>
<details>
<summary><strong>BrahMos-inspired battery</strong> · Player-controlled cruise strike</summary>

![BrahMos-inspired battery](../images/icons/glyph/brahmos.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | brahmos | Availability | Player |
| Branch | army | Domain | land |
| Cost | 440 | Health | 140 |
| Ammo | 3 | Range | 410 |
| Vision | 85 | Speed | 5 |
| Damage | 190 | Cooldown | 24 s |
| Members | 3 | Formation | launchers |
| Income | 0 credits/s | Slots | 1 |
| Targets | land, sea | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | Yes |
| Art category | army | UI glyph | Rocket |

Unmodified movement: 4.625 map units/s. Scaled base range: 512.5 map units. Clear-weather detection: 32.763 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=8, y=520, width=240, height=240`; heading correction **180°**. 

- Manual cruise launch: raw range is multiplied by ENGAGEMENT_RANGE_MULTIPLIER; unlike other weapons it is not divided by WORLD_LINEAR_SCALE.

</details>

<a id="hq9"></a>
<details>
<summary><strong>HQ-9/P</strong> · Long-range air defence</summary>

![HQ-9/P](../images/icons/glyph/hq9.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | hq9 | Availability | Opposing AI |
| Branch | army | Domain | land |
| Cost | 260 | Health | 140 |
| Ammo | 12 | Range | 115 |
| Vision | 145 | Speed | 4 |
| Damage | 32 | Cooldown | 6 s |
| Members | 4 | Formation | launchers |
| Income | 0 credits/s | Slots | 2 |
| Targets | air | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | ShieldCheck |

Unmodified movement: 3.7 map units/s. Scaled base range: 44.327 map units. Clear-weather detection: 55.89 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1032, y=264, width=240, height=240`; heading correction **180°**. Shared visual crop: `s400`.

- Without an operational same-team radar within 230 map units, effective range is multiplied by 0.78.

</details>

<a id="alkhalid"></a>
<details>
<summary><strong>Al-Khalid formation</strong> · Armoured formation</summary>

![Al-Khalid formation](../images/icons/glyph/alkhalid.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | alkhalid | Availability | Opposing AI |
| Branch | army | Domain | land |
| Cost | 240 | Health | 250 |
| Ammo | 16 | Range | 55 |
| Vision | 95 | Speed | 9 |
| Damage | 37 | Cooldown | 5 s |
| Members | 6 | Formation | tanks |
| Income | 0 credits/s | Slots | 1 |
| Targets | land | Capture | Yes |
| Air flag | No | Sea flag | No |
| Structure | No | Missile | No |
| Art category | army | UI glyph | CarFront |

Unmodified movement: 8.326 map units/s. Scaled base range: 21.2 map units. Clear-weather detection: 36.618 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1288, y=520, width=240, height=240`; heading correction **0°**. 

</details>

## Air (9)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![Rafale](../images/icons/glyph/rafale.svg) | [Rafale](#rafale) | Player | Multirole squadron | 230 | 110 | 8 | 46 | 18 |
| ![Su-30MKI](../images/icons/glyph/su30.svg) | [Su-30MKI](#su30) | Player | Heavy fighter squadron | 270 | 150 | 10 | 50 | 15 |
| ![Tejas](../images/icons/glyph/tejas.svg) | [Tejas](#tejas) | Player | Light fighter squadron | 170 | 85 | 6 | 40 | 21 |
| ![Scout UAV](../images/icons/glyph/drone.svg) | [Scout UAV](#drone) | Player | Unarmed reconnaissance | 90 | 55 | 0 | 0 | 12 |
| ![Strike UAV wing](../images/icons/glyph/armeddrone.svg) | [Strike UAV wing](#armeddrone) | Both sides | Light ground & naval attack | 165 | 65 | 4 | 52 | 13 |
| ![Interceptor drone swarm](../images/icons/glyph/interceptordrone.svg) | [Interceptor drone swarm](#interceptordrone) | Both sides | Drone interception only | 125 | 70 | 12 | 48 | 19 |
| ![JF-17](../images/icons/glyph/jf17.svg) | [JF-17](#jf17) | Opposing AI | Multirole squadron | 160 | 90 | 7 | 42 | 16 |
| ![F-16](../images/icons/glyph/f16.svg) | [F-16](#f16) | Opposing AI | Multirole squadron | 220 | 110 | 8 | 46 | 18 |
| ![J-10C](../images/icons/glyph/j10.svg) | [J-10C](#j10) | Opposing AI | Multirole squadron | 230 | 115 | 8 | 48 | 19 |

<a id="rafale"></a>
<details>
<summary><strong>Rafale</strong> · Multirole squadron</summary>

![Rafale](../images/icons/glyph/rafale.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | rafale | Availability | Player |
| Branch | air | Domain | air |
| Cost | 230 | Health | 110 |
| Ammo | 8 | Range | 46 |
| Vision | 115 | Speed | 18 |
| Damage | 30 | Cooldown | 4 s |
| Members | 4 | Formation | aircraft |
| Income | 0 credits/s | Slots | 1 |
| Targets | land, air, sea | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 16.651 map units/s. Scaled base range: 88.654 map units. Clear-weather detection: 221.634 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=8, y=8, width=240, height=240`; heading correction **0°**. 

- Detection and engagement radii are multiplied by 5 relative to v0.6; the base fields remain raw catalog values.

</details>

<a id="su30"></a>
<details>
<summary><strong>Su-30MKI</strong> · Heavy fighter squadron</summary>

![Su-30MKI](../images/icons/glyph/su30.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | su30 | Availability | Player |
| Branch | air | Domain | air |
| Cost | 270 | Health | 150 |
| Ammo | 10 | Range | 50 |
| Vision | 110 | Speed | 15 |
| Damage | 33 | Cooldown | 5 s |
| Members | 4 | Formation | aircraft |
| Income | 0 credits/s | Slots | 1 |
| Targets | land, air, sea | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 13.876 map units/s. Scaled base range: 96.363 map units. Clear-weather detection: 211.998 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=264, y=8, width=240, height=240`; heading correction **0°**. 

- Detection and engagement radii are multiplied by 5 relative to v0.6; the base fields remain raw catalog values.

</details>

<a id="tejas"></a>
<details>
<summary><strong>Tejas</strong> · Light fighter squadron</summary>

![Tejas](../images/icons/glyph/tejas.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | tejas | Availability | Player |
| Branch | air | Domain | air |
| Cost | 170 | Health | 85 |
| Ammo | 6 | Range | 40 |
| Vision | 100 | Speed | 21 |
| Damage | 24 | Cooldown | 3.5 s |
| Members | 4 | Formation | aircraft |
| Income | 0 credits/s | Slots | 1 |
| Targets | air, land | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 19.427 map units/s. Scaled base range: 77.09 map units. Clear-weather detection: 192.725 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=520, y=8, width=240, height=240`; heading correction **0°**. Shared visual crop: `jf17`.

- Detection and engagement radii are multiplied by 5 relative to v0.6; the base fields remain raw catalog values.

</details>

<a id="drone"></a>
<details>
<summary><strong>Scout UAV</strong> · Unarmed reconnaissance</summary>

![Scout UAV](../images/icons/glyph/drone.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | drone | Availability | Player |
| Branch | air | Domain | air |
| Cost | 90 | Health | 55 |
| Ammo | 0 | Range | 0 |
| Vision | 195 | Speed | 12 |
| Damage | 0 | Cooldown | 0 s |
| Members | 2 | Formation | drones |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Eye |

Unmodified movement: 11.101 map units/s. Scaled base range: 0 map units. Clear-weather detection: 75.163 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=776, y=8, width=240, height=240`; heading correction **0°**. 

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="armeddrone"></a>
<details>
<summary><strong>Strike UAV wing</strong> · Light ground &amp; naval attack</summary>

![Strike UAV wing](../images/icons/glyph/armeddrone.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | armeddrone | Availability | Both sides |
| Branch | air | Domain | air |
| Cost | 165 | Health | 65 |
| Ammo | 4 | Range | 52 |
| Vision | 155 | Speed | 13 |
| Damage | 27 | Cooldown | 7 s |
| Members | 3 | Formation | drones |
| Income | 0 credits/s | Slots | 1 |
| Targets | land, sea | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 12.026 map units/s. Scaled base range: 20.043 map units. Clear-weather detection: 59.745 map units.

Atlas: `game/public/assets/new-units.png`; crop `x=0, y=0, width=550, height=512`; heading correction **0°**. 

</details>

<a id="interceptordrone"></a>
<details>
<summary><strong>Interceptor drone swarm</strong> · Drone interception only</summary>

![Interceptor drone swarm](../images/icons/glyph/interceptordrone.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | interceptordrone | Availability | Both sides |
| Branch | air | Domain | air |
| Cost | 125 | Health | 70 |
| Ammo | 12 | Range | 48 |
| Vision | 125 | Speed | 19 |
| Damage | 24 | Cooldown | 3 s |
| Members | 8 | Formation | drones |
| Income | 0 credits/s | Slots | 1 |
| Targets | air | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Radar |

Unmodified movement: 17.577 map units/s. Scaled base range: 18.502 map units. Clear-weather detection: 48.181 map units.

Atlas: `game/public/assets/new-units.png`; crop `x=512, y=0, width=512, height=512`; heading correction **0°**. 

- Despite the air target-domain flag, canHit restricts this unit to drone, armeddrone and interceptordrone targets.

</details>

<a id="jf17"></a>
<details>
<summary><strong>JF-17</strong> · Multirole squadron</summary>

![JF-17](../images/icons/glyph/jf17.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | jf17 | Availability | Opposing AI |
| Branch | air | Domain | air |
| Cost | 160 | Health | 90 |
| Ammo | 7 | Range | 42 |
| Vision | 110 | Speed | 16 |
| Damage | 25 | Cooldown | 5 s |
| Members | 4 | Formation | aircraft |
| Income | 0 credits/s | Slots | 1 |
| Targets | air, land, sea | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 14.801 map units/s. Scaled base range: 80.945 map units. Clear-weather detection: 211.998 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=520, y=8, width=240, height=240`; heading correction **0°**. Shared visual crop: `tejas`.

- Detection and engagement radii are multiplied by 5 relative to v0.6; the base fields remain raw catalog values.

</details>

<a id="f16"></a>
<details>
<summary><strong>F-16</strong> · Multirole squadron</summary>

![F-16](../images/icons/glyph/f16.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | f16 | Availability | Opposing AI |
| Branch | air | Domain | air |
| Cost | 220 | Health | 110 |
| Ammo | 8 | Range | 46 |
| Vision | 115 | Speed | 18 |
| Damage | 29 | Cooldown | 4 s |
| Members | 4 | Formation | aircraft |
| Income | 0 credits/s | Slots | 1 |
| Targets | air, land, sea | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 16.651 map units/s. Scaled base range: 88.654 map units. Clear-weather detection: 221.634 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1032, y=8, width=240, height=240`; heading correction **0°**. 

- Detection and engagement radii are multiplied by 5 relative to v0.6; the base fields remain raw catalog values.

</details>

<a id="j10"></a>
<details>
<summary><strong>J-10C</strong> · Multirole squadron</summary>

![J-10C](../images/icons/glyph/j10.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | j10 | Availability | Opposing AI |
| Branch | air | Domain | air |
| Cost | 230 | Health | 115 |
| Ammo | 8 | Range | 48 |
| Vision | 120 | Speed | 19 |
| Damage | 30 | Cooldown | 4 s |
| Members | 4 | Formation | aircraft |
| Income | 0 credits/s | Slots | 1 |
| Targets | air, land, sea | Capture | No |
| Air flag | Yes | Sea flag | No |
| Structure | No | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 17.577 map units/s. Scaled base range: 92.508 map units. Clear-weather detection: 231.27 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1288, y=8, width=240, height=240`; heading correction **0°**. 

- Detection and engagement radii are multiplied by 5 relative to v0.6; the base fields remain raw catalog values.

</details>

## Navy (7)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![Visakhapatnam-class](../images/icons/glyph/destroyer.svg) | [Visakhapatnam-class](#destroyer) | Player | Destroyer group | 380 | 390 | 22 | 100 | 9 |
| ![Shivalik-class](../images/icons/glyph/frigate.svg) | [Shivalik-class](#frigate) | Player | Frigate escort | 270 | 270 | 18 | 85 | 11 |
| ![Kalvari-class](../images/icons/glyph/submarine.svg) | [Kalvari-class](#submarine) | Player | Low-visibility sea control | 310 | 180 | 8 | 72 | 7 |
| ![Vikrant-inspired carrier](../images/icons/glyph/carrier.svg) | [Vikrant-inspired carrier](#carrier) | Player | Mobile aircraft service | 680 | 650 | 20 | 75 | 6 |
| ![Fleet replenishment ship](../images/icons/glyph/supplyship.svg) | [Fleet replenishment ship](#supplyship) | Player | Naval repairs & resupply | 180 | 210 | 0 | 150 | 9 |
| ![Tughril-class](../images/icons/glyph/type054.svg) | [Tughril-class](#type054) | Opposing AI | Frigate formation | 260 | 280 | 18 | 90 | 10 |
| ![Agosta-inspired submarine](../images/icons/glyph/agosta.svg) | [Agosta-inspired submarine](#agosta) | Opposing AI | Low-visibility sea control | 280 | 175 | 8 | 68 | 7 |

<a id="destroyer"></a>
<details>
<summary><strong>Visakhapatnam-class</strong> · Destroyer group</summary>

![Visakhapatnam-class](../images/icons/glyph/destroyer.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | destroyer | Availability | Player |
| Branch | navy | Domain | sea |
| Cost | 380 | Health | 390 |
| Ammo | 22 | Range | 100 |
| Vision | 160 | Speed | 9 |
| Damage | 39 | Cooldown | 5 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | sea, air | Capture | Yes |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Ship |

Unmodified movement: 8.326 map units/s. Scaled base range: 38.545 map units. Clear-weather detection: 61.672 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=8, y=776, width=240, height=240`; heading correction **0°**. 

</details>

<a id="frigate"></a>
<details>
<summary><strong>Shivalik-class</strong> · Frigate escort</summary>

![Shivalik-class](../images/icons/glyph/frigate.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | frigate | Availability | Player |
| Branch | navy | Domain | sea |
| Cost | 270 | Health | 270 |
| Ammo | 18 | Range | 85 |
| Vision | 145 | Speed | 11 |
| Damage | 28 | Cooldown | 4 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | sea, air | Capture | Yes |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Ship |

Unmodified movement: 10.176 map units/s. Scaled base range: 32.763 map units. Clear-weather detection: 55.89 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=264, y=776, width=240, height=240`; heading correction **0°**. Shared visual crop: `type054`.

</details>

<a id="submarine"></a>
<details>
<summary><strong>Kalvari-class</strong> · Low-visibility sea control</summary>

![Kalvari-class](../images/icons/glyph/submarine.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | submarine | Availability | Player |
| Branch | navy | Domain | sea |
| Cost | 310 | Health | 180 |
| Ammo | 8 | Range | 72 |
| Vision | 115 | Speed | 7 |
| Damage | 65 | Cooldown | 9 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | sea | Capture | Yes |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Navigation |

Unmodified movement: 6.476 map units/s. Scaled base range: 27.752 map units. Clear-weather detection: 44.327 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=520, y=776, width=240, height=240`; heading correction **0°**. Shared visual crop: `agosta`.

</details>

<a id="carrier"></a>
<details>
<summary><strong>Vikrant-inspired carrier</strong> · Mobile aircraft service</summary>

![Vikrant-inspired carrier](../images/icons/glyph/carrier.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | carrier | Availability | Player |
| Branch | navy | Domain | sea |
| Cost | 680 | Health | 650 |
| Ammo | 20 | Range | 75 |
| Vision | 160 | Speed | 6 |
| Damage | 22 | Cooldown | 5 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | air | Capture | Yes |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Ship |

Unmodified movement: 5.55 map units/s. Scaled base range: 28.909 map units. Clear-weather detection: 61.672 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=776, y=776, width=240, height=240`; heading correction **0°**. 

</details>

<a id="supplyship"></a>
<details>
<summary><strong>Fleet replenishment ship</strong> · Naval repairs &amp; resupply</summary>

![Fleet replenishment ship](../images/icons/glyph/supplyship.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | supplyship | Availability | Player |
| Branch | navy | Domain | sea |
| Cost | 180 | Health | 210 |
| Ammo | 0 | Range | 150 |
| Vision | 80 | Speed | 9 |
| Damage | 0 | Cooldown | 5 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Anchor |

Unmodified movement: 8.326 map units/s. Scaled base range: 57.818 map units. Clear-weather detection: 30.836 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1032, y=776, width=240, height=240`; heading correction **0°**. 

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="type054"></a>
<details>
<summary><strong>Tughril-class</strong> · Frigate formation</summary>

![Tughril-class](../images/icons/glyph/type054.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | type054 | Availability | Opposing AI |
| Branch | navy | Domain | sea |
| Cost | 260 | Health | 280 |
| Ammo | 18 | Range | 90 |
| Vision | 145 | Speed | 10 |
| Damage | 32 | Cooldown | 5 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | sea, air | Capture | Yes |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Ship |

Unmodified movement: 9.251 map units/s. Scaled base range: 34.691 map units. Clear-weather detection: 55.89 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=264, y=776, width=240, height=240`; heading correction **0°**. Shared visual crop: `frigate`.

</details>

<a id="agosta"></a>
<details>
<summary><strong>Agosta-inspired submarine</strong> · Low-visibility sea control</summary>

![Agosta-inspired submarine](../images/icons/glyph/agosta.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | agosta | Availability | Opposing AI |
| Branch | navy | Domain | sea |
| Cost | 280 | Health | 175 |
| Ammo | 8 | Range | 68 |
| Vision | 105 | Speed | 7 |
| Damage | 59 | Cooldown | 9 s |
| Members | 1 | Formation | ship |
| Income | 0 credits/s | Slots | 1 |
| Targets | sea | Capture | Yes |
| Air flag | No | Sea flag | Yes |
| Structure | No | Missile | No |
| Art category | navy | UI glyph | Navigation |

Unmodified movement: 6.476 map units/s. Scaled base range: 26.211 map units. Clear-weather detection: 40.472 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=520, y=776, width=240, height=240`; heading correction **0°**. Shared visual crop: `submarine`.

</details>

## Construction and support installations (6)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![Forward command base](../images/icons/glyph/base.svg) | [Forward command base](#base) | Both sides | Income & deployment hub | 450 | 500 | 0 | 0 | 2 |
| ![Field airfield](../images/icons/glyph/airfield.svg) | [Field airfield](#airfield) | Both sides | Squadron launch & rearm | 380 | 370 | 0 | 0 | 0 |
| ![Supply depot](../images/icons/glyph/depot.svg) | [Supply depot](#depot) | Player | Extends resupply coverage | 180 | 240 | 0 | 190 | 0 |
| ![Logistics bridge](../images/icons/glyph/bridge.svg) | [Logistics bridge](#bridge) | Both sides · crossing engineering | Fictional military river crossing | 120 | 220 | 0 | 0 | 0 |
| ![Resource works](../images/icons/glyph/industry.svg) | [Resource works](#industry) | Both sides | +1.5 credits / second | 320 | 260 | 0 | 0 | 0 |
| ![Fleet anchorage](../images/icons/glyph/harbor.svg) | [Fleet anchorage](#harbor) | Both sides | Naval deployment & supply | 350 | 480 | 0 | 180 | 0 |

<a id="base"></a>
<details>
<summary><strong>Forward command base</strong> · Income &amp; deployment hub</summary>

![Forward command base](../images/icons/glyph/base.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | base | Availability | Both sides |
| Branch | build | Domain | land |
| Cost | 450 | Health | 500 |
| Ammo | 0 | Range | 0 |
| Vision | 120 | Speed | 2 |
| Damage | 0 | Cooldown | 0 s |
| Members | 1 | Formation | installation |
| Income | 0.65 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | Yes | Missile | No |
| Art category | build | UI glyph | TowerControl |

Unmodified movement: 1.85 map units/s. Scaled base range: 0 map units. Clear-weather detection: 46.254 map units.

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.
- unitArt returns null; the 2D map has a vector fallback and the UI uses the listed Lucide glyph. The current 3D renderer falls back to airfield atlas art.

</details>

<a id="airfield"></a>
<details>
<summary><strong>Field airfield</strong> · Squadron launch &amp; rearm</summary>

![Field airfield](../images/icons/glyph/airfield.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | airfield | Availability | Both sides |
| Branch | build | Domain | land |
| Cost | 380 | Health | 370 |
| Ammo | 0 | Range | 0 |
| Vision | 110 | Speed | 0 |
| Damage | 0 | Cooldown | 5 s |
| Members | 1 | Formation | installation |
| Income | 0.25 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | Yes | Missile | No |
| Art category | air | UI glyph | Plane |

Unmodified movement: 0 map units/s. Scaled base range: 0 map units. Clear-weather detection: 42.4 map units.

Atlas: `game/public/assets/unit-atlas.png`; crop `x=1288, y=776, width=240, height=240`; heading correction **0°**. 

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="depot"></a>
<details>
<summary><strong>Supply depot</strong> · Extends resupply coverage</summary>

![Supply depot](../images/icons/glyph/depot.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | depot | Availability | Player |
| Branch | build | Domain | land |
| Cost | 180 | Health | 240 |
| Ammo | 0 | Range | 190 |
| Vision | 75 | Speed | 0 |
| Damage | 0 | Cooldown | 5 s |
| Members | 1 | Formation | installation |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | Yes | Missile | No |
| Art category | build | UI glyph | Package |

Unmodified movement: 0 map units/s. Scaled base range: 73.236 map units. Clear-weather detection: 28.909 map units.

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.
- unitArt returns null; the 2D map has a vector fallback and the UI uses the listed Lucide glyph. The current 3D renderer falls back to airfield atlas art.

</details>

<a id="bridge"></a>
<details>
<summary><strong>Logistics bridge</strong> · Fictional military river crossing</summary>

![Logistics bridge](../images/icons/glyph/bridge.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | bridge | Availability | Both sides · crossing engineering |
| Branch | build | Domain | land |
| Cost | 120 | Health | 220 |
| Ammo | 0 | Range | 0 |
| Vision | 0 | Speed | 0 |
| Damage | 0 | Cooldown | 5 s |
| Members | 1 | Formation | installation |
| Income | 0 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | Yes | Missile | No |
| Art category | build | UI glyph | Route |

Unmodified movement: 0 map units/s. Scaled base range: 0 map units. Clear-weather detection: 0 map units.

Atlas: `game/public/assets/new-units.png`; crop `x=512, y=512, width=512, height=512`; heading correction **0°**. 

- Not available in the deployment tray. Existing open crossings receive assets; engineers build or rebuild bridges. Destruction closes the crossing.
- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.

</details>

<a id="industry"></a>
<details>
<summary><strong>Resource works</strong> · +1.5 credits / second</summary>

![Resource works](../images/icons/glyph/industry.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | industry | Availability | Both sides |
| Branch | build | Domain | land |
| Cost | 320 | Health | 260 |
| Ammo | 0 | Range | 0 |
| Vision | 65 | Speed | 0 |
| Damage | 0 | Cooldown | 5 s |
| Members | 1 | Formation | installation |
| Income | 1.5 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | No |
| Structure | Yes | Missile | No |
| Art category | build | UI glyph | Factory |

Unmodified movement: 0 map units/s. Scaled base range: 0 map units. Clear-weather detection: 25.054 map units.

- Scenario military works are present for both sides in sectors; these starting works generate no income and do not satisfy economy construction goals. Player-built works retain their listed income.
- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.
- The 2D fallback and 3D renderer draw a custom factory silhouette; the UI uses the listed Lucide glyph.

</details>

<a id="harbor"></a>
<details>
<summary><strong>Fleet anchorage</strong> · Naval deployment &amp; supply</summary>

![Fleet anchorage](../images/icons/glyph/harbor.svg)

| Field | Value | Field | Value |
| --- | --- | --- | --- |
| Catalog ID | harbor | Availability | Both sides |
| Branch | build | Domain | sea |
| Cost | 350 | Health | 480 |
| Ammo | 0 | Range | 180 |
| Vision | 130 | Speed | 0 |
| Damage | 0 | Cooldown | 5 s |
| Members | 1 | Formation | ship |
| Income | 0.4 credits/s | Slots | 1 |
| Targets | None | Capture | No |
| Air flag | No | Sea flag | Yes |
| Structure | Yes | Missile | No |
| Art category | navy | UI glyph | Anchor |

Unmodified movement: 0 map units/s. Scaled base range: 69.381 map units. Clear-weather detection: 50.109 map units.

- Non-damaging support or infrastructure entry; a nonzero range is not an attack range.
- unitArt returns null; the 2D map has a vector fallback and the UI uses the listed Lucide glyph. The current 3D renderer falls back to airfield atlas art.

</details>

## Runtime interpretation

The linear world scale is 3.243, and movement is multiplied by 3 before dividing by that scale. Non-missile range and sight are multiplied by 1.25 and divide by the linear world scale. BrahMos-inspired cruise range is multiplied by 1.25 without dividing by world scale. The general multiplier was introduced in v0.6. v0.7 additionally multiplies fighter (Rafale, Su-30MKI, Tejas, JF-17, F-16 and J-10C) detection and engagement by 5, and S-400/Akash by 4; other types are unchanged. The derived values above include those multipliers. Passive upkeep adds one ammunition round per 24 seconds and 0.15% maximum health per second after 20 damage-free seconds, excluding deployment and fast service. These conversions remain fictional and should not be presented as real weapon specifications.

Upgrades increase health by 20% per level and effective range by 8% per level. Ground movement slows above 700 m and 2,500 m in the display elevation model. Weather modifies air movement and detection. Two anti-drone types can attack only drone classes despite their broader `air` domain flag. Source JSON preserves both the raw fields and these documented exceptions.

Icons use the same Lucide glyph mapping as the app, under the [included license](../images/icons/LUCIDE-LICENSE.txt). Atlas crop coordinates come from `lib/game/unit-art.ts`; shared images are labelled explicitly.
