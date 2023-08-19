import React from "react"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"

const Overview: React.FC = () => {
  return (
    <Wrapper>
        <StoryTitle text="Rosehill Cycleway - Full Vision"/>
        <p>Rosehill Cemetery lies at the heart of Ward 40. Being a rather sizeable cemetery, it presents a bit of an obstacle for navigating parts of the Ward on bike.</p>
        <p>However, because there are no thru-streets, the cemetery provides a unique opportunity for a two-way protected bike path around its perimeter. With the exception of a few driveways in the southwest corner of the cemetery and the new Metra Station parking lot, the entire 3 mile loop could be completely grade separated from car traffic.</p>
        <p>The cycleway would connect directly to the new Peterson/Ridge Metra station as well as West Ridge Nature Park. Portions of the loop have already been identified as planned/potential bike routes, or are already bike routes.</p>
        <p>The full vision of the project is proposed to be implemented in three stages: 
          <ul>
            <li>&nbsp;</li>
            <StyledListItem>Phase 1 would be covered by Participatory Budget funds.</StyledListItem>
            <StyledListItem>Phase 2A is already a planned bike route on Ravenswood Avenue.</StyledListItem>
            <StyledListItem>Phase 2B has already been identified as a potential two-way bike path as part of the Western Ave Corridor Study.</StyledListItem>
            <StyledListItem>Phase 3 is likely out of scope for the PB budget, but could be incorporated into CDOT's overall bike network plan, or considered for a future PB.</StyledListItem>
          </ul>
        </p>
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
`

const StyledListItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
`

export default Overview