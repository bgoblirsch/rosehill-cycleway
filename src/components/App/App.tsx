import React from "react"
import styled from 'styled-components'

import colorConfigs from "../../configs/colorConfigs";
import { store } from 'src/redux/store'

import Map from "../Map"
import SideNav from "../SideNav"

const App: React.FC = () => {
    return (
        <AppWrapper>
            <SideNav/>
            <MapWrapper>
                <Map/>
            </MapWrapper>
            <StoryPaneBuffer/>
            <StoryPane/>
      </AppWrapper>
    )
}

const AppWrapper = styled.div`
  height: 98vh;
  display: flex;
`

const MapWrapper = styled.div`
    display: relative;
    height: 100%;
    width: 100%;
`

const StoryPane = styled.div`
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

export default App