---
title: "Introduction to ESA BIOMASS Remote Sensing"
date: '2026-07-01'
fields: ["Remote Sensing"]
description: 'Introduction to ESA BIOMASS remote sensing and forest information retrieval.'
industries: ['Global Space Ecosystem']
technologies:
  Language: ['Python']
  'Data Science': ['Earthaccess', 'Geopandas', 'Scikit-learn', 'Pandas', 'Pystac-client', 'Rasterio']
link: 'https://agfont.github.io/notebooks/esa-biomass-remote-sensing'
order: 6
---

## Introduction to ESA BIOMASS Remote Sensing

BIOMASS is a European Space Agency (ESA) mission designed to provide global measurements of forest biomass and carbon stocks. The mission uses a P-band synthetic aperture radar (SAR) to penetrate dense forest canopies and retrieve accurate forest information.

As an introduction to remote sensing radar data, I created a Python notebook to retrieve and analyze ESA BIOMASS datasets. The project focuses on understanding the data formats, processing techniques, and practical applications. BIOMASS data is hosted on the ESA MAAP catalogue and it is accessed using the `pystac-client` library. The notebook walks through the data progression from Level-1C Stack Interferometric products (co-registered, phase-calibrated sequences of SAR data) up to Level-2A forest height estimation. Finally, I ran a benchmark comparison against two independent NASA LiDAR references (AfriSAR LVIS and GEDI L2A) retrieved using the `earthaccess` library.

This notebook serves as a practical starting point for ESA BIOMASS remote sensing, providing a solid foundation for further exploration into forest information retrieval using radar data and interferometry techniques.