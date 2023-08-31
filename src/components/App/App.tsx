import React, { useEffect, useState } from "react"
import styled from 'styled-components'

import { AttributionControl, GeoJSON, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import NavButton from "../NavButton"
import Overview from "../StoryPane/Overview"
import ExistingRoutes from "../StoryPane/ExistingRoutes"
import FutureRoutes from "../StoryPane/FutureRoutes"
import Route from "../StoryPane/Route"
import MoreInfo from "../StoryPane/MoreInfo"

import Home from "../Icon/icons/Home"
import Bike from "../Icon/icons/Bike"
import Hourglass from "../Icon/icons/Hourglass"
import RouteIcon from "../Icon/icons/RouteIcon"
import Mail from "../Icon/icons/Mail"

import { MapController } from "../../helpers/MapController"

import ward40Boundary from "../Map/layers/ward40_boundary";
import ward40Mask from "../Map/layers/ward40_mask";
import rosehillRoute from "../Map/layers/rosehill_cycleway_route";
import existingRoutes from "../Map/layers/existing_routes";
import allRoutes from "../Map/layers/all_routes";
import rosehillRouteOffset from "../Map/layers/rosehill_route_offset";
import Markers from "../Map/components/Markers"

import { allRoutesStyle, existingRoutesStyle, rosehillRouteStyle } from "../../configs/layerStyles";
import { boundaryOptions, dashedRouteOptions, ward40MaskOptions } from "../../configs/layerStyles"

import ismobilejs from "ismobilejs"
const isBrowser = () => typeof window !== "undefined"
let isMobile:boolean;
if (isBrowser()) {
  isMobile = ismobilejs(window.navigator).any
}

import L from "leaflet"
function createIcon(url:string) {
  if (typeof window !== "undefined") {
    return new L.Icon({
      iconSize: [48,48],
      iconUrl: url,
    });
  }
}

const App: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const storyPaneCount = 4
  const handleState = (payload:number) => {
    if (payload > storyPaneCount) {
      setSelectedIndex(0)
    } else if (payload < 0) {
      setSelectedIndex(storyPaneCount)
    } else {
      setSelectedIndex(payload)
    }
  }
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50 

  const onTouchStart = (e:any) => {
    if (!isMobile) return
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e:any) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!isMobile) return 
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      handleState(selectedIndex+1)
    }
    if (isRightSwipe) {
      handleState(selectedIndex-1)
    }
  }
  return (
      <AppWrapper>
          {!isMobile && <NavWrapper>
            <NavButtonWrapper active={selectedIndex == 0} onClick={() => handleState(0)}>
              <NavButton icon={<Home color="white"/>} text="Project Overview" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 1}onClick={() => handleState(1)}>
              <NavButton icon={<Bike color="white" size={24}/>} text="Existing Bike Routes" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 2} onClick={() => handleState(2)}>
              <NavButton icon={<Hourglass color="white"/>} text="Future Bike Routes" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 3} onClick={() => handleState(3)}>
              <NavButton icon={<RouteIcon color="white"/>} text="Cycleway Route" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 4} onClick={() => handleState(4)}>
              <NavButton icon={<Mail color="white"/>} text="More Info" />
            </NavButtonWrapper>
          </NavWrapper>}
          {isMobile && <NavWrapper onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
              <StyledButton onClick={() => handleState(selectedIndex-1)}>{"<"}</StyledButton>
              <TitleWrapper>
                {selectedIndex === 0 && "Project Overview"}
                {selectedIndex === 1 && "Existing Bike Routes"}
                {selectedIndex === 2 && "Future Bike Routes"}
                {selectedIndex === 3 && "Cycleway Route"}
                {selectedIndex === 4 && "More Info"}
              </TitleWrapper>
              <StyledButton onClick={() => handleState(selectedIndex+1)}>{">"}</StyledButton>
          </NavWrapper>}
          <MapWrapper>
            <MapContainer
              style={{ height: "100%" }} 
              center = { [41.984728, -87.669536] } 
              zoom = { 14.3 }
              attributionControl={false}
            >
              <MapController
                selectedIndex={selectedIndex}
              />
              <TileLayer
                  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">MapTiler</a>, &copy; <a href="http://openstreetmap.org">OSM</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              />
                  <AttributionControl position="bottomleft"/>
                  <GeoJSON data={ward40Boundary} pathOptions={boundaryOptions}/>
                  <GeoJSON data={ward40Mask} pathOptions={ward40MaskOptions}/>
                  <Marker position={[41.991421428231256, -87.675034918123188]} icon={createIcon("https://i.imgur.com/dGbqOJ6.png")}>
                    <Popup>
                      Peterson/Ridge Metra Station
                    </Popup>
                  </Marker>
                  <Marker position={[41.987, -87.6885]} icon={createIcon("https://i.imgur.com/ECkFbCf.png")}>
                    <Popup>
                      West Ridge Nature Park
                    </Popup>
                  </Marker>
                  {(selectedIndex == 0 || selectedIndex > 2) && <GeoJSON data={rosehillRoute} onEachFeature={rosehillRouteStyle}></GeoJSON>}
                  {selectedIndex == 1 && <GeoJSON  data={existingRoutes} onEachFeature={existingRoutesStyle}/>}
                  {selectedIndex == 2 && <GeoJSON  data={allRoutes} onEachFeature={allRoutesStyle}/>}
                  {selectedIndex == 2 && <GeoJSON  data={rosehillRouteOffset} pathOptions={dashedRouteOptions}/>}
                  {selectedIndex > 2 && <Markers/>}
          </MapContainer>
          </MapWrapper>
          <StoryPane  onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {selectedIndex === 0 && <Overview/>}
            {selectedIndex === 1 && <ExistingRoutes/>}
            {selectedIndex === 2 && <FutureRoutes/>}
            {selectedIndex === 3 && <Route/>}
            {selectedIndex === 4 && <MoreInfo/>}
          </StoryPane>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  width: 100vw;
`

const MapWrapper = styled.div`
    height: ${isMobile ? "50%" : "100%"};
    min-height: 450px;
    position: relative;
    width: 55%;
    min-width: ${isMobile ? "100%" : "600px"};
`

const NavWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${isMobile ? "row" : "column"};
  align-items: ${isMobile ? "center" : "flex-start"};
  justify-content: ${isMobile ? "center" : "flex-start"};
  background-color: #233044;
  padding-top:  ${isMobile ? "4px" : "24px"};
  padding-bottom:  ${isMobile ? "2px" : "0"};
  width: ${!isMobile ? "230px" : "100vw"};
  min-width: ${isMobile ? "100vw" : "200px"};
  color: white;
  gap: 8px;
`

const TitleWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
`

interface NavButtonWrapperProps {
  active: boolean;
}

const NavButtonWrapper = styled.div<NavButtonWrapperProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    background-color: #445d85;
  };
  background: ${props => props.active ? "#334663" : "#233044"}
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    background-color: #445d85;
  };
  background: "#233044";
`

const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: #233044;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  justify-content: center;
`

const StoryPane = styled.div`
  width: ${isMobile ? "100vw" : "30%"};
  height: ${isMobile ?  "60%": "100vh"};
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #233044;
  right: 0;
  color: white;
  overflow: scroll;
  overflow-x: hidden;
`

export default App