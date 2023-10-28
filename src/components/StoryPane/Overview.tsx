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

const Overview: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="The 40th Ward"/>
        <Legend>
          <LegendItem>
              <svg stroke="rgb(139, 4, 201)" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="30" y2="5" />
              </svg> 
            {"Phase 2A"}<br/>
            {"Planned bike route on Ravenswood"}
          </LegendItem>
          <LegendItem>
              <svg stroke="rgb(201, 4, 192)" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="30" y2="5" />
              </svg> 
            {"Phase 2B"}<br/>
            {"Identified bike route on Western Ave"}
          </LegendItem>
          <LegendItem>
              <svg stroke="black" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="30" y2="5" />
              </svg> 
            {"Ward Boundaries"}
          </LegendItem>
        </Legend>
        <p>This website is a work in progress with the goal of highlighting areas for improved pedestrian and bicycle infrastructure in the 40th Ward and surrounding neighborhoods. If you have any requests for additional data to be added or included, please don't hesitate to reach out by filling out this form [!!!Google Form v2!!!].</p>
        <Bold>Currently planned data layers:</Bold>
        <ul>
          <li>- Existing Bike Routes (by stress level and by type)</li>
          <li>- Future Bike Routes (planned and potential)</li>
          <li>- Vehicle Crash Data</li>
          <li>- Project Sidewalk Virtual Survey Results</li>
          <li>- Public Greenspace</li>
          <li>- Transit Overview</li>
        </ul>
        <p>&nbsp;</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  gap: ${isMobile ? "20px" : "24px"};
  padding: ${isMobile ? "24px" : "32px"};
  color: white;
  font-size: 17px;
  width: 100%;
  flex: 1;
  padding-bottom: 12px;
`

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3c485c;
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

const Bold = styled.p`
  font-weight: bold;
`

export default Overview