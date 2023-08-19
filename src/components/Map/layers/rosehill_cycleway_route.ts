const rosehillRoute = {
"type": "FeatureCollection",
"name": "rosehill_cycleway_route",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "phase": "1A", "descr": "Fully separate two-way bike lane on west side of Ravenswood Ave and North side of Bowmansville", "implement": "Low", "cost": "Low", "name": "Ravenswood-Bowmanville Leg" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -87.674740653974382, 41.990638322223141 ], [ -87.674619002874024, 41.986824373738166 ], [ -87.674717638901328, 41.986580801132504 ], [ -87.674631058388428, 41.983375575801183 ], [ -87.674730790371555, 41.983347877128374 ], [ -87.679297638435813, 41.983268039709955 ], [ -87.679392986595516, 41.983253375683447 ], [ -87.679478471152535, 41.983206124908364 ], [ -87.679513541739993, 41.983111623253045 ], [ -87.679513541739993, 41.982225256072311 ], [ -87.679535460857181, 41.982085130719398 ], [ -87.683279246071322, 41.980126602232318 ], [ -87.684331363695932, 41.97956608049676 ], [ -87.688408319491202, 41.977760645553616 ], [ -87.689092195947197, 41.977747609736127 ] ] ] } },
{ "type": "Feature", "properties": { "id": 2, "phase": "3", "descr": "Complete the cycleway loop on Western Ave", "implement": null, "cost": null, "name": "Complete Loop on Western Ave" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -87.689092195947197, 41.977747609736127 ], [ -87.689159597232532, 41.979543879497946 ], [ -87.689282344288642, 41.983157855761284 ], [ -87.689343717816783, 41.984998982110746 ], [ -87.689418242815179, 41.986804211826815 ], [ -87.689418242815179, 41.986804211826815 ] ] ] } },
{ "type": "Feature", "properties": { "id": 3, "phase": "2", "descr": null, "implement": null, "cost": null, "name": null }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -87.674740653974382, 41.990638322223141 ], [ -87.689503727372241, 41.990375418006465 ], [ -87.689481808255024, 41.988637086738869 ], [ -87.689418242815179, 41.986804211826815 ], [ -87.689418242815179, 41.986804211826815 ] ] ] } }
]
}

export default rosehillRoute
