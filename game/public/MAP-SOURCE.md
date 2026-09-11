# Geographic geometry

Made with Natural Earth. Public-domain cartography; accessed 2026-09-10.

`south-asia.json` is a WGS84 GeoJSON FeatureCollection. Each feature keeps `id`, `properties.iso3`, `properties.name`, `properties.label` (longitude, latitude), and Polygon/MultiPolygon geometry. The nine previous countries are retained, with Myanmar and the source's separately classified Siachen Glacier disputed-area feature added. The latter has `properties.classification = "Disputed area"`, not "Country".

The source is now Natural Earth 1:10m Admin 0 Countries. The India feature has 35 polygons, retains all source island components, and spans 68.143403–97.362253°E, 6.745551–35.495406°N. This includes the northeast, the source's administered Jammu and Kashmir / Ladakh area, Lakshadweep, and Andaman and Nicobar. The source uses de facto boundaries; this is not an outline of every territorial claim. Large rings are simplified at 0.008° tolerance; rings of 50 vertices or fewer are preserved intact. Holes and multipart structure are preserved. `land.ts` derives its projected exterior rings from this same geometry, with the existing projection x=(longitude−60)×33, y=(39−latitude)×33. Its rings are filtered by intersection of their bounding boxes with the display extent; large neighbouring mainland rings can extend beyond the display.

`india-regions.json` optionally supplies five administrative-region geometries and geographic label anchors: Jammu and Kashmir, Ladakh, Arunachal Pradesh, Lakshadweep, and Andaman and Nicobar Islands. The J&K anchor is calculated from the current source polygon because its supplied anchor predates the split from Ladakh. These shapes come from Natural Earth Admin 1 States / Provinces.

`disputed-boundaries.json` contains `{bounds, coordinateOrder, boundaries, source}`. Every boundary has `{id, name, kind, sourceName, sourceClass, left, right, coordinates}`. `coordinates` is an array of polylines, each containing `[longitude, latitude]` points. `kind` is `loc` or `disputed-boundary`. All line coordinates are preserved exactly from source features; there is no manual tracing, smoothing, or invented connection.

The LoC features are Natural Earth IDs 1746709133, 1746709127, and 1746709141. Their source class is "Line of control (please verify)". The source also applies that class to southern Jammu feature 1746708757; it remains separately labelled "Disputed boundary" here to avoid treating every southern segment as the conventionally named LoC. Source indeterminate Siachen frontiers remain separate disputed-boundary lines. Natural Earth itself asks users to verify disputed boundary attributes; these are approximate cartographic features and do not claim current local boundary accuracy.

Suggested on-map note: "Generalized map · boundaries may be disputed". Suggested line legend: "LoC (approx.) / disputed boundary".

Sources:

- [Admin 0 Countries](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/)
- [Admin 0 Boundary Lines](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-boundary-lines/)
- [Natural Earth vector repository](https://github.com/nvkelso/natural-earth-vector)
- [Public-domain terms](https://www.naturalearthdata.com/about/terms-of-use/)

Original GeoJSON files are retained in source-cache and identified by SHA-256 in `source-hashes.json`. No military installations, positions, or current conflict data are included.
