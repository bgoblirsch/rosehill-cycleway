import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"

import ismobilejs from "ismobilejs"
const isBrowser = () => typeof window !== "undefined"
let isMobile:boolean;
if (isBrowser()) {
  isMobile = ismobilejs(window.navigator).any
}

const ExistingRoutes: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Existing Bike Routes"/>
        <Legend>
          <LegendItem>       
            <svg stroke="green" stroke-width="4" height="10" width="30">
              <line x1="0" y1="5" x2="30" y2="5" />
            </svg> 
            {"Low Stress Bike Route"}<br/>
            {"Protected Lanes & Mixed-use Paths"}
          </LegendItem>
          <LegendItem>
              <svg stroke="orange" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="30" y2="5" />
              </svg> 
            {"Medium Stress Bike Route"}<br/>
            {"Nbhd. Greenways & Buffered Lanes"}
          </LegendItem>
          <LegendItem>
              <svg stroke="red" stroke-width="4" height="10" width="30">
                <line x1="0" y1="5" x2="30" y2="5" />
              </svg> 
            {"High Stress Bike Route"}<br/>
            {"Shared and Unbuffered Lanes"}
          </LegendItem>
        </Legend>
        <p>Being borderd by the North Shore Channel Trail on the west and Clark Street on the east, Ward 40 has a great foundation for a bike network. </p>
        <p>The proposed Rosehill Cycleway route would diretly connect to the Neighborhood Greenway on Berwyn Avenue.</p>
        <p>Lastly, the existing bike route on Damen Avenue and Bryn Mawr Avenue consists of unprotected bike lanes on a truck route. Shifting the routes to a protected lane would vastly increase safety.</p>
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

export default ExistingRoutes