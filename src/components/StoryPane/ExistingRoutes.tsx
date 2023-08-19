import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"
import StoryLink from "./components/StoryLink"

const ExistingRoutes: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Existing Bike Routes"/>
        <p>Being borderd by North Branch Trail on the west and Clark Street on the east, Ward 40 has a great foundation for a bike network. </p>
        <p>More info about existing network.</p>
        <p>Lorem ipsum</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  background-color: #233044;
  gap: 24px;
  padding: 32px;
  color: white;
  font-size: 17px;
`

export default ExistingRoutes