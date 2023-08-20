import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"
import StoryLink from "./components/StoryLink"

import ismobilejs from "ismobilejs"
const isMobile = ismobilejs(window.navigator).any;

const Overview: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Rosehill Cycleway - Full Vision"/>
        <Legend>
          <LegendItem>       
            <svg stroke="green" stroke-width="4" height="10" width="30">
              <line x1="0" y1="5" x2="30" y2="5" />
            </svg> 
            {"Phase 1"}<br/>
            {"Participatory Budget portion"}
          </LegendItem>
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
              <svg stroke="green" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="10" y2="5" />
                <line x1="20" y1="5" x2="30" y2="5" />
              </svg> 
            {"Phase 3 (not in project scope)"}<br/>
            {"Complete the loop"}
          </LegendItem>
        </Legend>
        <p>Rosehill Cemetery lies at the heart of Ward 40. Being a rather sizeable cemetery, it presents a bit of an obstacle for navigating parts of the Ward on bike.</p>
        <p>However, because there are no thru-streets, the cemetery provides a unique opportunity for a <StoryLink to="https://www.chicago.gov/city/en/depts/cdot/provdrs/bike/news/2023/march/cdot-releases-updated-cycling-strategy-to-expand-bike-network-an.html" text="low-stress"></StoryLink>, <StoryLink to="https://lede-admin.chi.streetsblog.org/wp-content/uploads/sites/51/2017/06/Biker-entering-Chicago-Avenue-Bike-Lane-at-the-Sheridan-Road-Curve-1-1.jpg?w=3840&q=75" text="two-way protected bike path"/> around its perimeter. With the exception of a few driveways in the southwest corner of the cemetery and the new Metra Station parking lot, the entire 3 mile loop could be completely grade separated from car traffic.</p>
        <p>The cycleway would connect directly to the new Peterson/Ridge Metra station, the Berwyn Neigbhorhood Greenway, and West Ridge Nature Park. Portions of the loop have already been identified as planned/potential bike routes, or are existing bike routes.</p>
        <Bold>Please note, that Phase 3 is not included in the scope of this proposal.</Bold> 
        <p>Implementing Phase 3 with the existing right-of-way on Peterson Avenue is likely out of scope for a Participatory Budget special project. Phase 3 is instead proposed for future PB or CDOT consideration once Peterson Avenue is due for resurfacing. There is space for a two-way bike path, but it would require significant changes to the streetscape.</p>
        <p>Phase 1 however, utilizes existing right of way and would have minimal impact on the existing streetscape. This should keep costs down and allow for multiple special projects. A two-way protected bike route also provides the benefit of only requiring half the material and construction requirements compared to a traditional protected bike route.</p>
        <p>Phase 2 consists of bike routes that are already planned bike routes, or have been identified as a potential route.</p>
        <p>&nbsp;</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:  flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
  color: white;
  font-size: 17px;
  width: 100%;
  flex: 1;
  padding-bottom: 12px;
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

const Bold = styled.p`
  font-weight: bold;
`

export default Overview