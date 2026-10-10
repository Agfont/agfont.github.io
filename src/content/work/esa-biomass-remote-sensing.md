---
title: "Introduction to ESA BIOMASS Remote Sensing"
date: '2026-07-01'
fields: ["Remote Sensing"]
description: 'Introduction to ESA BIOMASS remote sensing and forest information retrieval.'
industries: ['Global Space Ecosystem']
technologies:
  Language: ['Python']
  'Data Science': ['Pandas', 'Scikit-learn']
  'Remote Sensing': ['Earthaccess', 'Geopandas', 'Pystac-client', 'Rasterio']
link: 'https://agfont.github.io/notebooks/esa-biomass-remote-sensing'
order: 6
---

## Introduction to ESA BIOMASS Remote Sensing

BIOMASS is a European Space Agency (ESA) mission designed to provide global measurements of forest biomass and carbon stocks. The mission uses a P-band **Synthetic Aperture Radar (SAR)** to penetrate dense forest canopies and retrieve accurate forest information.

As an introduction to remote sensing radar data, I created a Python notebook to retrieve and analyze ESA BIOMASS datasets. The project focuses on understanding the data formats, processing techniques, and practical applications. BIOMASS data is hosted on the ESA MAAP catalogue and it is accessed using the `pystac-client` library. The notebook walks through the data progression from **Level-1C Stack Interferometric products** (co-registered, phase-calibrated sequences of SAR data) up to **Level-2A Forest Height estimation**. Finally, I ran a benchmark comparison against two independent NASA LiDAR references (AfriSAR LVIS and GEDI L2A) retrieved using the `earthaccess` library.

### Results

The Level-1C stack: flattened interferogram, flattening phase screen and interferometric coherence.

![Three maps of a BIOMASS Level-1C stack: the flattened interferogram phase, the flattening phase screen, and coherence, with a median coherence of 0.87](../../assets/biomass/output_16_0.png)

The Level-2A forest height product and its canopy-height distribution (mean 27.2 m, median 28.6 m).

![Map of BIOMASS Level-2A forest height next to a histogram of canopy heights with a mean of 27.2 m and a median of 28.6 m](../../assets/biomass/output_26_0.png)

Benchmark against AfriSAR LVIS airborne LiDAR (RH98): RMSE 11.88 m, bias -0.25 m, r = 0.60.

![Scatter plot of BIOMASS forest height against AfriSAR LVIS RH98, with RMSE 11.88 m and r 0.596](../../assets/biomass/output_30_1.png)
![Map of residuals between BIOMASS forest height and AfriSAR LVIS RH98 along the LiDAR flight lines](../../assets/biomass/output_30_2.png)

Benchmark against GEDI L2A spaceborne LiDAR (RH98): RMSE 12.29 m, bias -4.40 m, r = 0.22.

![Scatter plot of BIOMASS forest height against GEDI L2A RH98, with RMSE 12.29 m and r 0.219](../../assets/biomass/output_32_1.png)
![Map of residuals between BIOMASS forest height and GEDI L2A RH98 along the GEDI ground tracks](../../assets/biomass/output_32_2.png)

This notebook serves as a practical starting point for ESA BIOMASS remote sensing, providing a solid foundation for further exploration into forest information retrieval using radar data and interferometry techniques.