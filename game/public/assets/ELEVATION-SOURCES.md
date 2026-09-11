# South Asia elevation and rivers

## elevation.json

An offline 321 × 289 numeric grid in meters, north-to-south row-major order. Bounds: west 58°E, east 98°E, south 4°N, north 40°N. Grid vertices include all bounds. Longitude=58+column/320×40; latitude=40−row/288×36. Both spacings are 0.125°. Negative heights retain source seabed bathymetry.

Sixteen Mapzen / AWS Terrarium zoom-5 tiles (x=21–24, y=12–15) were decoded, bilinearly reprojected from Web Mercator to a regular longitude/latitude grid, and rounded to integer meters. Existing cached source tiles already cover the extension to 98°E. No elevation is invented or exaggerated. Grid values span −5228 to 6397 meters; the coarse grid does not sample every individual mountain summit. Small islands can be smaller than a grid cell and should also be represented by their vector outlines or labels.

- [Official catalog](https://registry.opendata.aws/terrain-tiles/)
- [Encoding documentation](https://github.com/tilezen/joerd/blob/master/docs/formats.md)
- [Attribution and licenses](https://github.com/tilezen/joerd/blob/master/docs/attribution.md)
- Source tiles: `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/5/{x}/{y}.png`

Attribution: Mapzen Terrain Tiles. Global GMTED2010 and SRTM terrain data courtesy of the U.S. Geological Survey; global ETOPO1 terrain data from the U.S. National Oceanic and Atmospheric Administration. Accessed 2026-09-10.

## rivers.json

Natural Earth 1:50m Rivers + Lake Centerlines. Schema is unchanged: each river has `name`, `scalerank`, and `coordinates`, an array of geographic polylines. The asset now contains 35 river features and 792 vertices across the expanded bounds. Lines are clipped to 58–98°E, 4–40°N, simplified at 0.035°, and rounded to five decimal degrees. They are generalized display rivers, not a routing network.

- [Official dataset](https://www.naturalearthdata.com/downloads/50m-physical-vectors/50m-rivers-lake-centerlines/)
- [Source archive](https://naturalearth.s3.amazonaws.com/50m_physical/ne_50m_rivers_lake_centerlines.zip)
- [Public-domain terms](https://www.naturalearthdata.com/about/terms-of-use/)

Attribution: Made with Natural Earth.
