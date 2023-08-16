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

import { store } from '../redux/store'

import App from "../components/App"

import Layout from "../components/Layout/Layout"
import StoryPane from "../components/StoryPane"

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Provider store={store}>
        <Layout>
            <StoryPane title="Existing Bike Routes" body="biking sucks rn"/>
        </Layout>
      </Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
