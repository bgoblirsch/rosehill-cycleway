import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import ismobilejs from "ismobilejs"
import { AttributionControl, GeoJSON, MapContainer, TileLayer } from 'react-leaflet'

import NavButton from "../NavButton"
import Overview from "../StoryPane/Overview"
import ExistingRoutes from "../StoryPane/ExistingRoutes"
import FutureRoutes from "../StoryPane/FutureRoutes"
import Route from "../StoryPane/Route"

import Home from "../Icon/icons/Home"
import Bike from "../Icon/icons/Bike"
import Hourglass from "../Icon/icons/Hourglass"
import RouteIcon from "../Icon/icons/RouteIcon"

import { MapController } from "../../helpers/MapController"

import ward40Boundary from "../Map/layers/ward40_boundary";
import ward40Mask from "../Map/layers/ward40_mask";
import rosehillRoute from "../Map/layers/rosehill_cycleway_route";
import existingRoutes from "../Map/layers/existing_routes";
import allRoutes from "../Map/layers/all_routes";
import rosehillRouteOffset from "../Map/layers/rosehill_route_offset"
import projectOverviewPOIs from "../Map/layers/project_overview_pois"

import { allRoutesStyle, existingRoutesStyle } from "../../configs/layerStyles"
import { boundaryOptions, dashedRouteOptions, projectOverviewRouteSettins, ward40MaskOptions, rosehillRouteOptions } from "../../configs/layerStyles"
import projectPOIs from "../Map/layers/project_pois"

const isMobile = ismobilejs(window.navigator).any;

const App: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (payload:number) => {
    if (payload > 3) {
      setSelectedIndex(0)
    } else if (payload < 0) {
      setSelectedIndex(3)
    } else {
      setSelectedIndex(payload)
    }
  }
  return (
      <AppWrapper>
          {!isMobile && <NavWrapper>
            <NavButtonWrapper active={selectedIndex == 0} onClick={() => handleClick(0)}>
              <NavButton icon={<Home color="white"/>} text="Project Overview" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 1}onClick={() => handleClick(1)}>
              <NavButton icon={<Bike color="white" size={24}/>} text="Existing Bike Routes" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 2} onClick={() => handleClick(2)}>
              <NavButton icon={<Hourglass color="white"/>} text="Future Bike Routes" />
            </NavButtonWrapper>
            <NavButtonWrapper active={selectedIndex == 3} onClick={() => handleClick(3)}>
              <NavButton icon={<RouteIcon color="white"/>} text="Cycleway Route" />
            </NavButtonWrapper>
          </NavWrapper>}
          {isMobile && <NavWrapper  >
              <StyledButton onClick={() => handleClick(selectedIndex-1)}>{"<"}</StyledButton>
              <TitleWrapper>
                {selectedIndex === 0 && "Project Overview"}
                {selectedIndex === 1 && "Existing Bike Routes"}
                {selectedIndex === 2 && "Future Bike Routes"}
                {selectedIndex === 3 && "Cycleway Route"}
              </TitleWrapper>
              <StyledButton onClick={() => handleClick(selectedIndex+1)}>{">"}</StyledButton>
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
                  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              />
                  <AttributionControl position="bottomleft"/>
                  <GeoJSON data={ward40Boundary} pathOptions={boundaryOptions}></GeoJSON>
                  <GeoJSON data={ward40Mask} pathOptions={ward40MaskOptions}></GeoJSON>
                  {(selectedIndex == 0 || selectedIndex == 3) && <GeoJSON data={rosehillRoute} pathOptions={projectOverviewRouteSettins}></GeoJSON>}
                  {selectedIndex == 0 && <GeoJSON data={projectOverviewPOIs}></GeoJSON>}
                  {selectedIndex == 1 && <GeoJSON  data={existingRoutes} onEachFeature={existingRoutesStyle}></GeoJSON>}
                  {selectedIndex == 2 && <GeoJSON  data={allRoutes} onEachFeature={allRoutesStyle}></GeoJSON>}
                  {selectedIndex == 2 && <GeoJSON  data={rosehillRouteOffset} pathOptions={dashedRouteOptions}></GeoJSON>}
                  {selectedIndex == 3 && <GeoJSON data={projectPOIs} onEachFeature={allRoutesStyle}></GeoJSON>}
          </MapContainer>
          </MapWrapper>
          <StoryPane>
            {selectedIndex === 0 && <Overview/>}
            {selectedIndex === 1 && <ExistingRoutes/>}
            {selectedIndex === 2 && <FutureRoutes/>}
            {selectedIndex === 3 && <Route/>}
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
    height: ${isMobile ? "100%" : "100%"};
    min-height: 450px;
    flex:1;
    position: relative;
    min-width: ${isMobile ? "100%" : "600px"};
`

const NavWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${isMobile ? "row" : "column"};
  align-items: ${isMobile ? "center" : "flex-start"};
  justify-content: ${isMobile ? "center" : "flex-start"};
  background-color: #233044;
  padding-top:  ${isMobile ? "16px" : "24px"};
  padding-bottom:  ${isMobile ? "12px" : "0"};
  width: ${isMobile ? "100vw" : "230px"};
  min-width: ${isMobile ? "100vw" : "200px"};
  color: white;
  gap: 8px;
`

const TitleWrapper = styled.div`
  width: 150px;
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

const StyledButton = styled.button`
  border: none;
  color: white;
  background-color: #233044;
  padding-bottom: 4px;
`

const StoryPane = styled.div`
  width: ${isMobile ? "100vw" : "30%"};
  height: ${!isMobile ? "100vh" : "100%"};
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #233044;
  right: 0;
  color: white;
  overflow: scroll;
`

export default App