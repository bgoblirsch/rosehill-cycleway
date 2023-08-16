import React from "react"
import styled from 'styled-components'
import { AttributionControl, GeoJSON, MapContainer, TileLayer } from 'react-leaflet'

import ward40Boundary from "./layers/ward40_boundary";
import ward40Mask from "./layers/ward40_mask";
import rosehillRoute from "./layers/rosehill_cycleway_route";

const boundaryOptions = { color: "black", fill: false}
const ward40MaskOptions = { color: "black", fill: true, fillcColor: "rgba(96,96,96)" }
const rosehillRouteOptions = { color: "green" }

const Map: React.FC = () => {
    return (
        <MapContainer 
            style={{ height: "100%" }} 
            center = { [41.986728, -87.667536] } 
            zoom = { 14 }
            attributionControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <AttributionControl position="bottomleft"/>
                <GeoJSON pathOptions={boundaryOptions} data={ward40Boundary}></GeoJSON>
                <GeoJSON pathOptions={ward40MaskOptions} data={ward40Mask}></GeoJSON>
                <GeoJSON pathOptions={rosehillRouteOptions} data={rosehillRoute}></GeoJSON>
        </MapContainer>
    )
}

export default Map