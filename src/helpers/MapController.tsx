import React, { FC, useEffect } from "react";
import { useMap } from "react-leaflet";

import ismobilejs from "ismobilejs"
const isBrowser = () => typeof window !== "undefined"
let isMobile:boolean;
if (isBrowser()) {
  isMobile = ismobilejs(window.navigator).any
}
const webAnchors = {
    projectOverview: {
        latlon: [41.984728, -87.688536],
        zoom: 14
    },
    routeOverview: {
        latlon: [41.984728, -87.68106],
        zoom: 15.4
    },
    futureRoutes: {
        latlon: [41.984728, -87.68106],
        zoom: 14.9
    }
}

const mobileAnchors = {
    projectOverview: {
        latlon: [41.984128, -87.688536],
        zoom: 13.15
    },
    routeOverview: {
        latlon: [41.983728, -87.68306],
        zoom: 14.5
    },
    futureRoutes: {
        latlon: [41.983728, -87.68306],
        zoom: 14.5
    }
}

const webHome = {
    lat: webAnchors.projectOverview.latlon[0],
    lng: webAnchors.projectOverview.latlon[1]
}   

const webRouteOverview = {
    lat: webAnchors.routeOverview.latlon[0],
    lng: webAnchors.routeOverview.latlon[1]
}

const webFutureRoutes = {
    lat: webAnchors.futureRoutes.latlon[0],
    lng: webAnchors.futureRoutes.latlon[1]
}

const mobileHome = {
    lat: mobileAnchors.projectOverview.latlon[0],
    lng: mobileAnchors.projectOverview.latlon[1]
}   

const mobileRouteOverview = {
    lat: mobileAnchors.routeOverview.latlon[0],
    lng: mobileAnchors.routeOverview.latlon[1]
}

const mobileFutureRoutes = {
    lat: mobileAnchors.futureRoutes.latlon[0],
    lng: mobileAnchors.futureRoutes.latlon[1]
}

const MapController: FC<{ selectedIndex: number }> = ({selectedIndex}) => {
    const map = useMap();

    useEffect(() => {
        if (isMobile) {
            switch(selectedIndex) {
                case 0:
                    // Project Overview
                    map.flyTo(mobileHome, mobileAnchors.projectOverview.zoom)
                    break
                case 1:
                    // Existing Bike Routes
                    map.flyTo(mobileHome, mobileAnchors.projectOverview.zoom)
                    break
                case 2:
                    // Future Bike Routes
                    map.flyTo(mobileFutureRoutes, mobileAnchors.futureRoutes.zoom)
                    break
                case 3:
                    // Cycleway Route
                    map.flyTo(mobileRouteOverview, mobileAnchors.routeOverview.zoom)
                    break
                default:
                    console.error("unexpected state")
            }
        } else {
            switch(selectedIndex) {
                case 0:
                    // Project Overview
                    map.flyTo(webHome, webAnchors.projectOverview.zoom)
                    break
                case 1:
                    // Existing Bike Routes
                    map.flyTo(webHome, webAnchors.projectOverview.zoom)
                    break
                case 2:
                    // Future Bike Routes
                    map.flyTo(webFutureRoutes, webAnchors.futureRoutes.zoom)
                    break
                case 3:
                    // Cycleway Route
                    map.flyTo(webRouteOverview, webAnchors.routeOverview.zoom)
                    break
                default:
                    console.error("unexpected state")
            }   
        }

    }, [selectedIndex])

    return null
}

export { MapController };
