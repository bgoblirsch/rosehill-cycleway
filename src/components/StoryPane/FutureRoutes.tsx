import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"
import StoryLink from "./components/StoryLink"

const FutureRoutes: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Planned and Potential Routes"/>
        <p>Ravenswood Avenue is already <StoryLink to="https://www.chicago.gov/content/dam/city/depts/cdot/bike/2023/2023_Chicago%20Cycling%20Update.pdf" text="a planned CDOT bike route"/>. This project proposes that the route should be a two-lane protected bike lane on the west side of Ravenswood—at least between Bryn Mawr and Peterson where Ravenswood is parallel to the cemetery.</p>
        <p>The <StoryLink to="https://www.chicago.gov/content/dam/city/sites/westernavenue/Western_Avenue_Corridor_Study_Adopted.pdf" text="Western Avenue Corridor Study"/> was adopted in November 2022 and proposes replacing the east side parking on Western Ave with a two-way protected bike lane between Berdwyn Ave and Ardmore Ave. The Rosehill Cycleway project proposes that once Peterson Avenue is due for a street resurfacing, the route should be extended northwards on Western to Peterson Ave, then continue eastbound to Ravenswood Avenue, completing the loop.</p>
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

export default FutureRoutes