import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"
import StoryLink from "./components/StoryLink"

import ismobilejs from "ismobilejs"
const isBrowser = () => typeof window !== "undefined"
let isMobile:boolean;
if (isBrowser()) {
  isMobile = ismobilejs(window.navigator).any
}

const FutureRoutes: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Planned and Potential Routes"/>
        <Legend>
          <LegendItem>       
            <svg height="10" width="30">
              <line stroke="green" stroke-width="4" x1="0" y1="5" x2="30" y2="5" />
            </svg> 
            Existing Bike Route
          </LegendItem>
          <LegendItem>
            <svg stroke="green" stroke-width="4" height="10" width="30">
              <line x1="0" y1="5" x2="10" y2="5" />
              <line x1="20" y1="5" x2="30" y2="5" />
            </svg> 
            Proposed Rosehill Cycleway Route
          </LegendItem>
          <LegendItem>
            <svg stroke="rgb(139, 4, 201)" stroke-width="4" height="10" width="30">
              <line x1="0" y1="5" x2="30" y2="5" />
            </svg> 
            Planned Bike Route
          </LegendItem>
          <LegendItem>
            <svg stroke="rgb(201, 4, 192)" stroke-width="4" height="10" width="30">
              <line x1="0" y1="5" x2="30" y2="5" />
            </svg> 
            Identified Bike Route Candidate
          </LegendItem>
        </Legend>
        <p>N Ravenswood Avenue along Rosehill Cemetery is already <StoryLink to="https://www.chicago.gov/content/dam/city/depts/cdot/bike/2023/2023_Chicago%20Cycling%20Update.pdf" text="a planned CDOT bike route"/>. If it is not already the plan, the Rosehill Cycleway project proposes that the Ravenswood route should be considered for a two-lane protected bike lane on the west side of Ravenswood, at least along the cemetary. Although the entire Ravenswood bike route would also be a good candidate for a two-way protected route because it runs parallel to the UP-N route.</p>
        <p>The <StoryLink to="https://www.chicago.gov/content/dam/city/sites/westernavenue/Western_Avenue_Corridor_Study_Adopted.pdf" text="Western Avenue Corridor Study"/> was adopted in November 2022 and proposes replacing the east side parking on Western Ave with a two-way protected bike lane between Berwyn Ave and Ardmore Ave. The Rosehill Cycleway project further proposes that once Peterson Avenue is due for a street resurfacing, the route could be extended north to Peterson Ave, then continue east to Ravenswood Avenue to complete the loop.</p>
        <p>A contraflow neighborhood greenway on Rockwell St (south of Gregory St) was proposed for a previous (and possibly this year's) participatory budget special project. However, most of this route (north of Berwyn) has already been identified as a planned neighborhood greenway by CDOT according to the <StoryLink text="Lincoln Park Streetscape Plans" to="https://40f4ba.a2cdn1.secureserver.net/wp-content/uploads/2021/03/Lincoln_Public-Meeting-4-Boards_red.pdf"></StoryLink>.</p>
        <p>&nbsp;</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  background-color: #233044;
  gap: ${isMobile ? "20px" : "24px"};
  padding: ${isMobile ? "24px" : "32px"};
  color: white;
  font-size: 17px;
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #334663;
  border-radius: 8px;
  align-items: flex-start;
  padding: 8px;
  gap: ${isMobile ? "8px" : "16px"};
`
const LegendItem = styled.div`
  min-height: 30px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  font-size: ${isMobile ? "14px" : "16px"};
`

export default FutureRoutes