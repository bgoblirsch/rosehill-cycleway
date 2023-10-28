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
          <LegendItem>
              <svg stroke="black" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="30" y2="5" />
              </svg> 
            {"Ward Boundaries"}
          </LegendItem>
        </Legend>
        <p>Rosehill Cemetery lies at the heart of the 40th ward. Being a rather sizeable cemetery, it presents a bit of an obstacle for navigating parts of the ward on bike.</p>
        <p>However, because there are no thru-streets, the cemetery provides a unique opportunity for a <StoryLink to="https://www.chicago.gov/city/en/depts/cdot/provdrs/bike/news/2023/march/cdot-releases-updated-cycling-strategy-to-expand-bike-network-an.html" text="low-stress"></StoryLink>, <StoryLink to="https://lede-admin.chi.streetsblog.org/wp-content/uploads/sites/51/2017/06/Biker-entering-Chicago-Avenue-Bike-Lane-at-the-Sheridan-Road-Curve-1-1.jpg?w=3840&q=75" text="two-way protected bike path"/> around its perimeter. The entire 3 mile loop could be almost entirely separated from motor vehicle traffic, with the exception of the three entrances to the cemetary, a few driveways in the southwest corner of the cemetery, and the new Metra Station parking lot.</p>
        <p>The proposed cycleway would connect directly to the new Peterson/Ridge Metra station and the Berwyn Neigbhorhood Greenway. The full vision of the plan would eventually connect West Ridge Nature Park.</p>
        <Bold>Phases 2A, 2B, and 3 are not included in the scope of this proposal.</Bold>
        <p>However, Phase 2A is already a planned bike route and Phase 2B has been identified as a potential two-way bike route by the <StoryLink to="https://www.chicago.gov/content/dam/city/sites/westernavenue/Western_Avenue_Corridor_Study_Adopted.pdf" text="2022 Western Avenue Corridor Study"/>.</p>
        <p>Phase 1 utilizes existing right of way and should have minimal impact on the existing streetscape. The route length may unfortunately be a bit out of scope for a PB special project without assistance from CDOT. Although, a two-way protected bike lane would only require infrastructure to be installed on one side of the street which should help keep both material and labor costs lower than a comparable protected route.</p>
        <p>Phase 3 is proposed by this project for future PB, CDOT, or State consideration once Peterson Avenue is due for resurfacing. Regardless of Phase 3's adoption, Phase 1 still provides a great expansion of the network by providing a safe and efficient route around Rosehill Cemetery, as well as more bicycle access to the new Metra station.</p>
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