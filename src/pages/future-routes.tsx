import * as React from "react"
import { Provider } from "react-redux"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components'

import { store } from '../redux/store'

import Layout from "../components/Layout/Layout"
import StoryPane from "../components/StoryPane"

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Provider store={store}>
        <Layout>
            <StoryPane title="Planned and Future Bike Routes" body="but it's getting better"/>
        </Layout>
      </Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
