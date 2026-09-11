# Unit and weapon catalog

All **37 catalog types** are documented here: 29 tray-deployable types, 7 opposing-only types and 1 engineering-created bridge type. 11 entries appear on both sides; the opposing AI uses 19 types in total. Weapons, reconnaissance, logistics, engineering and installations are all included.

**All specifications are fictional game-balance values copied from the code.** Real-world-inspired names do not represent real weapon performance or current service inventory. Player and opposing labels describe this game's implementation.

[Structured JSON](weapons.json) · [Atlas icon index](ICON-INDEX.md) · [Browser atlas catalog](unit-catalog.html)

The tables show base catalog values. Cost is in fictional credits; HP and ammunition describe a formation. Range, sight and speed are abstract catalog values, not kilometers or real speeds. The engine applies world scaling, weather, upgrades and other game modifiers. Follow a type name to the complete field reference.

## Army (15)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![S-400](../images/icons/glyph/s400.svg) | [S-400](REFERENCE.md#s400) | Player | Sector air & vehicle defence | 280 | 150 | 12 | 130 | 4 |
| ![Akash](../images/icons/glyph/akash.svg) | [Akash](REFERENCE.md#akash) | Player | Mobile air & vehicle defence | 150 | 110 | 10 | 78 | 5 |
| ![Counter-drone vehicle](../images/icons/glyph/counterdrone.svg) | [Counter-drone vehicle](REFERENCE.md#counterdrone) | Both sides | Drone disruption & point defence | 160 | 130 | 18 | 75 | 7 |
| ![River-crossing engineers](../images/icons/glyph/bridgelayer.svg) | [River-crossing engineers](REFERENCE.md#bridgelayer) | Player | Construct pontoon crossings | 180 | 160 | 0 | 0 | 7 |
| ![Radar station](../images/icons/glyph/radar.svg) | [Radar station](REFERENCE.md#radar) | Both sides | Detection & identification | 120 | 90 | 0 | 0 | 4 |
| ![Supply column](../images/icons/glyph/logistics.svg) | [Supply column](REFERENCE.md#logistics) | Both sides | Mobile resupply support | 100 | 110 | 0 | 110 | 8 |
| ![Infantry company](../images/icons/glyph/infantry.svg) | [Infantry company](REFERENCE.md#infantry) | Both sides | Capture & hold sectors | 110 | 180 | 24 | 38 | 7 |
| ![T-90 formation](../images/icons/glyph/t90.svg) | [T-90 formation](REFERENCE.md#t90) | Player | Mobile heavy armour | 250 | 260 | 16 | 58 | 9 |
| ![Arjun formation](../images/icons/glyph/arjun.svg) | [Arjun formation](REFERENCE.md#arjun) | Player | Heavy assault armour | 290 | 320 | 14 | 62 | 6 |
| ![Mechanized infantry](../images/icons/glyph/bmp.svg) | [Mechanized infantry](REFERENCE.md#bmp) | Player | Fast sector occupation | 180 | 190 | 18 | 43 | 11 |
| ![K9-inspired battery](../images/icons/glyph/artillery.svg) | [K9-inspired battery](REFERENCE.md#artillery) | Both sides | Long-range ground support | 240 | 120 | 10 | 125 | 5 |
| ![Combat engineers](../images/icons/glyph/engineer.svg) | [Combat engineers](REFERENCE.md#engineer) | Player | Establish forward bases | 95 | 100 | 6 | 28 | 8 |
| ![BrahMos-inspired battery](../images/icons/glyph/brahmos.svg) | [BrahMos-inspired battery](REFERENCE.md#brahmos) | Player | Player-controlled cruise strike | 440 | 140 | 3 | 410 | 5 |
| ![HQ-9/P](../images/icons/glyph/hq9.svg) | [HQ-9/P](REFERENCE.md#hq9) | Opposing AI | Long-range air defence | 260 | 140 | 12 | 115 | 4 |
| ![Al-Khalid formation](../images/icons/glyph/alkhalid.svg) | [Al-Khalid formation](REFERENCE.md#alkhalid) | Opposing AI | Armoured formation | 240 | 250 | 16 | 55 | 9 |

## Air (9)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![Rafale](../images/icons/glyph/rafale.svg) | [Rafale](REFERENCE.md#rafale) | Player | Multirole squadron | 230 | 110 | 8 | 46 | 18 |
| ![Su-30MKI](../images/icons/glyph/su30.svg) | [Su-30MKI](REFERENCE.md#su30) | Player | Heavy fighter squadron | 270 | 150 | 10 | 50 | 15 |
| ![Tejas](../images/icons/glyph/tejas.svg) | [Tejas](REFERENCE.md#tejas) | Player | Light fighter squadron | 170 | 85 | 6 | 40 | 21 |
| ![Scout UAV](../images/icons/glyph/drone.svg) | [Scout UAV](REFERENCE.md#drone) | Player | Unarmed reconnaissance | 90 | 55 | 0 | 0 | 12 |
| ![Strike UAV wing](../images/icons/glyph/armeddrone.svg) | [Strike UAV wing](REFERENCE.md#armeddrone) | Both sides | Light ground & naval attack | 165 | 65 | 4 | 52 | 13 |
| ![Interceptor drone swarm](../images/icons/glyph/interceptordrone.svg) | [Interceptor drone swarm](REFERENCE.md#interceptordrone) | Both sides | Drone interception only | 125 | 70 | 12 | 48 | 19 |
| ![JF-17](../images/icons/glyph/jf17.svg) | [JF-17](REFERENCE.md#jf17) | Opposing AI | Multirole squadron | 160 | 90 | 7 | 42 | 16 |
| ![F-16](../images/icons/glyph/f16.svg) | [F-16](REFERENCE.md#f16) | Opposing AI | Multirole squadron | 220 | 110 | 8 | 46 | 18 |
| ![J-10C](../images/icons/glyph/j10.svg) | [J-10C](REFERENCE.md#j10) | Opposing AI | Multirole squadron | 230 | 115 | 8 | 48 | 19 |

## Navy (7)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![Visakhapatnam-class](../images/icons/glyph/destroyer.svg) | [Visakhapatnam-class](REFERENCE.md#destroyer) | Player | Destroyer group | 380 | 390 | 22 | 100 | 9 |
| ![Shivalik-class](../images/icons/glyph/frigate.svg) | [Shivalik-class](REFERENCE.md#frigate) | Player | Frigate escort | 270 | 270 | 18 | 85 | 11 |
| ![Kalvari-class](../images/icons/glyph/submarine.svg) | [Kalvari-class](REFERENCE.md#submarine) | Player | Low-visibility sea control | 310 | 180 | 8 | 72 | 7 |
| ![Vikrant-inspired carrier](../images/icons/glyph/carrier.svg) | [Vikrant-inspired carrier](REFERENCE.md#carrier) | Player | Mobile aircraft service | 680 | 650 | 20 | 75 | 6 |
| ![Fleet replenishment ship](../images/icons/glyph/supplyship.svg) | [Fleet replenishment ship](REFERENCE.md#supplyship) | Player | Naval repairs & resupply | 180 | 210 | 0 | 150 | 9 |
| ![Tughril-class](../images/icons/glyph/type054.svg) | [Tughril-class](REFERENCE.md#type054) | Opposing AI | Frigate formation | 260 | 280 | 18 | 90 | 10 |
| ![Agosta-inspired submarine](../images/icons/glyph/agosta.svg) | [Agosta-inspired submarine](REFERENCE.md#agosta) | Opposing AI | Low-visibility sea control | 280 | 175 | 8 | 68 | 7 |

## Construction and support installations (6)

| Icon | Type | Side | Role | Cost | HP | Ammo | Range | Speed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| ![Forward command base](../images/icons/glyph/base.svg) | [Forward command base](REFERENCE.md#base) | Both sides | Income & deployment hub | 450 | 500 | 0 | 0 | 2 |
| ![Field airfield](../images/icons/glyph/airfield.svg) | [Field airfield](REFERENCE.md#airfield) | Both sides | Squadron launch & rearm | 380 | 370 | 0 | 0 | 0 |
| ![Supply depot](../images/icons/glyph/depot.svg) | [Supply depot](REFERENCE.md#depot) | Player | Extends resupply coverage | 180 | 240 | 0 | 190 | 0 |
| ![Logistics bridge](../images/icons/glyph/bridge.svg) | [Logistics bridge](REFERENCE.md#bridge) | Both sides · crossing engineering | Fictional military river crossing | 120 | 220 | 0 | 0 | 0 |
| ![Resource works](../images/icons/glyph/industry.svg) | [Resource works](REFERENCE.md#industry) | Both sides | +1.5 credits / second | 320 | 260 | 0 | 0 | 0 |
| ![Fleet anchorage](../images/icons/glyph/harbor.svg) | [Fleet anchorage](REFERENCE.md#harbor) | Both sides | Naval deployment & supply | 350 | 480 | 0 | 180 | 0 |

## Runtime interpretation

The linear world scale is 3.243, and movement is multiplied by 3 before dividing by that scale. Non-missile range and sight are multiplied by 1.25 and divide by the linear world scale. BrahMos-inspired cruise range is multiplied by 1.25 without dividing by world scale. The general multiplier was introduced in v0.6. v0.7 additionally multiplies fighter (Rafale, Su-30MKI, Tejas, JF-17, F-16 and J-10C) detection and engagement by 5, and S-400/Akash by 4; other types are unchanged. The summary tables above show raw configuration values; [REFERENCE.md](REFERENCE.md) and [weapons.json](weapons.json) provide derived values including those multipliers. Passive upkeep adds one ammunition round per 24 seconds and 0.15% maximum health per second after 20 damage-free seconds, excluding deployment and fast service. These conversions remain fictional and should not be presented as real weapon specifications.

Upgrades increase health by 20% per level and effective range by 8% per level. Ground movement slows above 700 m and 2,500 m in the display elevation model. Weather modifies air movement and detection. Two anti-drone types can attack only drone classes despite their broader `air` domain flag. Source JSON preserves both the raw fields and these documented exceptions.

Icons use the same Lucide glyph mapping as the app, under the [included license](../images/icons/LUCIDE-LICENSE.txt). Atlas crop coordinates come from `lib/game/unit-art.ts`; shared images are labelled explicitly.
