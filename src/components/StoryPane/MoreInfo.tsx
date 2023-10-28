import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import StoryTitle from "./components/StoryTitle"
import StoryLink from "./components/StoryLink"

import ismobilejs from "ismobilejs"
const isBrowser = () => typeof window !== "undefined"
let isMobile:boolean;
if (isBrowser()) {
  isMobile = ismobilejs(window.navigator).any
}

const MoreInfo: React.FC = () => {
  const linkStyle = { color: "white" }
  return (
    <Wrapper>
        <StoryTitle text="More Info"/>
        <p>Please make sure to check out the other projects once they have been posted! To stay up to date, the 40th ward's blog can be found at: <StoryLink to="https://40thward.org/blog/" text="https://40thward.org/blog/"></StoryLink></p>
        <p>For more information on Participatory Budgeting and the process, see the 40th ward's website: <StoryLink to="https://40thward.org/topics-and-services/participatory-budgeting/" text="https://40thward.org/topics-and-services/participatory-budgeting/"></StoryLink></p>
        <p>If you have any feedback or questions about this project proposal or the website, I'd love to hear from you. I would also appreciate reports for any data inaccuracies. You may use this <StoryLink to="https://forms.gle/vrPuhXooxCL5Tvee6" text="Google form"></StoryLink> to get in touch.</p>
        <Disclaimer>The data for the ward boundaries and existing bike routes were sourced from the <StoryLink to="https://data.cityofchicago.org/" text="Chicago Data Portal"></StoryLink> and the existing bike route data received a few edits to better reflect the actual bike network. All other data was manually digitized for the purpose of this proposal.</Disclaimer>
        <Disclaimer><Link target="_blank" to="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</Link></Disclaimer>

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
  background-color: #607594;
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

const Disclaimer = styled.p`
  font-size: 12px;
`

export default MoreInfo