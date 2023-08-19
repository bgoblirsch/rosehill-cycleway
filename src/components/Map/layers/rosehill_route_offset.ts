const rosehillRouteOffset = {
"type": "FeatureCollection",
"name": "rosehill_cycleway_route",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "phase": "1A", "descr": "Fully separate two-way bike lane on west side of Ravenswood Ave and North side of Bowmansville", "implement": "Low", "cost": "Low", "name": "Ravenswood-Bowmanville Leg" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -87.674886085226262, 41.990636949926269 ], [ -87.674743276754455, 41.986826394895971 ], [ -87.674785259138901, 41.986567301934542 ], [ -87.674730790371555, 41.983347877128374 ], [ -87.674730790371555, 41.983347877128374 ], [ -87.679294111493988, 41.983294290138751 ], [ -87.679414213731036, 41.98328416875632 ], [ -87.679518302297282, 41.983221471785413 ], [ -87.679558778422432, 41.983107471855803 ], [ -87.679542811630157, 41.982241390550207 ], [ -87.679590093437113, 41.982068770458191 ], [ -87.683279246071322, 41.980126602232318 ], [ -87.684331363695932, 41.97956608049676 ], [ -87.688408319491202, 41.977760645553616 ], [ -87.689092195947197, 41.977747609736127 ] ] ] } },
{ "type": "Feature", "properties": { "id": 2, "phase": "3", "descr": "Complete the cycleway loop on Western Ave", "implement": null, "cost": null, "name": "Complete Loop on Western Ave" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -87.689092195947197, 41.977747609736127 ], [ -87.689159597232532, 41.979543879497946 ], [ -87.689282344288642, 41.983157855761284 ], [ -87.689343717816783, 41.984998982110746 ], [ -87.689418242815179, 41.986804211826815 ], [ -87.689418242815179, 41.986804211826815 ] ] ] } },
{ "type": "Feature", "properties": { "id": 3, "phase": "2", "descr": null, "implement": null, "cost": null, "name": null }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -87.674886085226262, 41.990636949926269 ], [ -87.689503727372241, 41.990375418006465 ], [ -87.689481808255024, 41.988637086738869 ], [ -87.689418242815179, 41.986804211826815 ], [ -87.689418242815179, 41.986804211826815 ] ] ] } }
]
}

export default rosehillRouteOffset