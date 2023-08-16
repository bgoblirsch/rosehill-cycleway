import * as React from "react"
import { Provider } from "react-redux"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components'
import {
  createBrowserRouter,
  Route,
  Routes,
  useLocation,
  RouterProvider,
} from 'react-router-dom'

import colorConfigs from "../configs/colorConfigs";
import { store } from '../redux/store'

import Map from "../components/Map"
import SideNav from "../components/SideNav"

import ProjectOverview from "../views/ProjectOverview"
import FutureRoutes from "../views/FutureRoutes"
import ExistingRoutes from "../views/ExistingRoutes"


{/* <Routes>
<Route path="/" element={ <ProjectOverview /> } />
<Route path="/existing-routes" element={ <ExistingRoutes /> } />
<Route path="/future-routes" element={ <FutureRoutes /> } />
</Routes> */}

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Provider store={store}>
        <AppWrapper>
          <SideNav/>
          <MapWrapper>
            <Map/>
          </MapWrapper>
          <StoryPaneBuffer/>
          <StoryPane>

          </StoryPane>
        </AppWrapper>
      </Provider>
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


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
