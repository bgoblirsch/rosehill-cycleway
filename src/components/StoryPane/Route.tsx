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

const Route: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Route Considerations"/>
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
        <p>Phase 1 includes the Participatory Budget portion of the route and would lay the foundation for a full loop to be completed in the future. Phase 1 consists of a two-way protected bike lane installment on the south side of Rosehill Cemetery, along Bowmanville Ave, Damen Ave, and Bryn Mawr Ave. This route utilizes existing right of way and would require minimal changes to the existing streetscape.</p>
        <p><StoryLink to="https://www.chicagotribune.com/columns/ct-bike-lane-network-getting-around-met-1012-20151011-column.html" text="$200,000 per mile was CDOT's cost estimate for protected bike lanes in 2015."/> Phase 1 is roughly 0.91 miles in length, making for an inflation-adjusted initial cost estimate of around $224,000. This estimate is probably a little optimistically low but a barrier would only be needed on the north/west portions of the route.</p>
        <p>Phase 2A is already a CDOT planned bike route on Ravenswood Avenue. This project proposes that the Ravenswood route should be a two-way protected bike path on the west side of Ravenswood Avenue—at least along the cemetery.</p>
        <p>Phase 2B has already been identified as a potential two-way protected bike route on Western Avenue between Berwyn Ave and Ardmore Avenue.</p>
        <p>Upon completion of both Phase 2 routes, most of the cemetery could be circumnavigated along two miles of protected bike paths. The new bike route would be connected to the Berwyn Avenue Neighborhood Greenway and would connect many Ward 40 residents to the new Metra Station.</p>
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
  width: 100%;
  height: 100%;
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

export default Route