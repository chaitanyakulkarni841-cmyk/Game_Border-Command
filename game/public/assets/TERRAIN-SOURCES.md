# South Asia terrain relief

`terrain.webp` is a geographic crop of Natural Earth I with Shaded Relief and Water, medium size, version 3.2.0. Source imagery combines satellite-derived land-cover coloring and shaded relief. It is a cartographic image, not a recent satellite photograph.

Exact outer bounds: west 58°E, east 98°E, south 4°N, north 40°N. Dimensions: 1800 × 1620 pixels, north up. CRS: EPSG:4326, equirectangular. The source TIFF is 16200 × 8100 pixels at 45 pixels/degree; the exact source pixel crop is `(10710, 2250, 12510, 3870)`. This is a native-resolution crop encoded at WEBP quality 92. No pixels are generated or geographically altered.

Normalized texture coordinates are x=(longitude−58)/40 and y=(40−latitude)/36. In the existing game projection, the rectangle is x=−66, y=−33, width=1320, height=1188, center=(594,561). It must not be stretched onto the old square rectangle. `terrain-georeference.json` preserves these dimensions.

- [Official dataset](https://www.naturalearthdata.com/downloads/10m-raster-data/10m-natural-earth-1/)
- [Source archive](https://naturalearth.s3.amazonaws.com/10m_raster/NE1_LR_LC_SR_W.zip)
- [Public-domain terms](https://www.naturalearthdata.com/about/terms-of-use/)

Attribution: Made with Natural Earth. Accessed 2026-09-10.
