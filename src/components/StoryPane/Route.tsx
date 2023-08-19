import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"

const Overview: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Route Considerations"/>
        <p>Cost estimates: $ LOW COST $ </p>
        <p>lorem ipsum</p>
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
  width: 100%;
`

export default Overview