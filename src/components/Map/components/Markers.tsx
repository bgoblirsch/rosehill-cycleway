import React from "react"
import { FeatureGroup, Marker, Popup } from 'react-leaflet'

import L from "leaflet"
function createIcon(url:string) {
  if (typeof window !== "undefined") {
    return new L.Icon({
      iconSize: [48,48],
      iconUrl: url,
    });
  }
}

const stationIcon = "https://i.imgur.com/dGbqOJ6.png"
const parkIcon = "https://i.imgur.com/ECkFbCf.png"
const cartIcon = "https://i.imgur.com/t4fCAux.png"
const bikeIcon = "https://i.imgur.com/FKvXHi3.png"

const Markers: React.FC = () => {
  return (
    <FeatureGroup>
        <Marker position={[41.991421428231256, -87.675034918123188]} icon={createIcon(stationIcon)}>
            <Popup>
                Peterson/Ridge Metra Station
            </Popup>
        </Marker>
        <Marker position={[41.987, -87.6885]} icon={createIcon(parkIcon)}>
            <Popup>
                West Ridge Nature Park
            </Popup>
        </Marker>
        <Marker position={[41.991047849814592, -87.68244546276965,  ]} icon={createIcon(cartIcon)}>
            <Popup>
                Peterson Ave Target
            </Popup>
        </Marker>
        <Marker position={[41.976865954543669, -87.691974011878386 ]} icon={createIcon(cartIcon)}>
            <Popup>
                Tony's Fresh Market
            </Popup>
        </Marker>
        <Marker position={[41.97930934278547, -87.685314984079668 ]} icon={createIcon(parkIcon)}>
            <Popup>
                Bowmanville GreenSpace Park
            </Popup>
        </Marker>
        <Marker position={[41.98336859702308, -87.689923852809031 ]} icon={createIcon(cartIcon)}>
            <Popup>
                {"Q & H Grocery"}
            </Popup>
        </Marker>
        <Marker position={[41.990313,-87.692937 ]} icon={createIcon(cartIcon)}>
            <Popup>
                CHIN LAND Asian Food Market
            </Popup>
        </Marker>
        <Marker position={[41.986747410384083, -87.689933108242371 ]} icon={createIcon(bikeIcon)}>
            <Popup>
                Divy Bike Station
            </Popup>
        </Marker>
        <Marker position={[41.991202629260655, -87.683641727512978 ]} icon={createIcon(bikeIcon)}>
            <Popup>
                Divy Bike Station
            </Popup>
        </Marker>
        <Marker position={[41.97987005920136, -87.681927158509538 ]} icon={createIcon(bikeIcon)}>
            <Popup>
                Divy Bike Station
            </Popup>
        </Marker>
        <Marker position={[41.979448639265243, -87.692839314272547 ]} icon={createIcon(bikeIcon)}>
            <Popup>
                Divy Bike Station
            </Popup>
        </Marker>
        <Marker position={[41.990744309030354, -87.66973890989162 ]} icon={createIcon(bikeIcon)}>
            <Popup>
                Divy Bike Station
            </Popup>
        </Marker>
    </FeatureGroup>
  )
}

export default Markers