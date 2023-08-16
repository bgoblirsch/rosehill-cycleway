import React, { ReactNode } from "react"
import styled from "styled-components"
import ExistingRoutes from "src/views/ExistingRoutes"
import colorConfigs from "../../configs/colorConfigs"

import SideNav from "../SideNav"
import Map from "../Map"

interface Props {
    children?: ReactNode
}

const children = [
    {
        state: "overview",
        icon: "home",
        element: <></>,
    },
    {
        state: "existing",
        icon: "bike",
        element: <></>,
    },
    {
        state: "future",
        icon: "hourglass",
        element: <></>,
    },
]

export const Layout = ({ children, ...props }:Props) => (
    <AppWrapper>
        <SideNav/>
        <MapWrapper>
            <Map/>
        </MapWrapper>
        <StoryPaneBuffer/>
        <StoryPaneWrapper>
            {children}
        </StoryPaneWrapper>
    </AppWrapper>
)

const AppWrapper = styled.div`
  height: 98vh;
  display: flex;
`

const MapWrapper = styled.div`
    display: relative;
    height: 100%;
    width: 100%;
`

const StoryPaneWrapper = styled.div`
  background-image: linear-gradient(to right, ${colorConfigs.storyBg1}, ${colorConfigs.storyBg2});
  width: 25%;
  display: flex;
  justify-content: center;
  z-index: 1001;
  position: absolute;
  right: 0;
  height: 98vh;
  pointer-events: none;
  color: white;
`

const StoryPaneBuffer = styled.div`
  background-image: linear-gradient(to right, ${colorConfigs.storyBg0}, ${colorConfigs.storyBg1});
  width: 15%;
  display: flex;
  justify-content: center;
  z-index: 1001;
  position: absolute;
  right: 25%;
  height: 98vh;
  pointer-events: none;
`

export default Layout