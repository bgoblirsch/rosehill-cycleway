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
        <StoryTitle text="Contact &#38; More Info"/>
        <p>This website is for informational purposes only. While the owner of this site has strived to ensure accurate data, this site makes no warranty, representation, or guaranty as to the content, accuracy, timeliness, or completeness of any of the data provided at this website.</p>
        <p>Most data was sourced from <StoryLink to="https://data.cityofchicago.org/" text="the Chicago Data Portal"></StoryLink> and the existing bike route data received a few edits to better reflect the actual bike network. Future bike routes have been pulled from various sources including CDOT's greater bike network plan [NEED LINK] and project planning documents. Links to sources are included where possible and can be seen by clicking on a feature in the map.</p>
        <p>If you have any feedback or questions about this website, I'd love to hear from you. I would also appreciate reports for any data inaccuracies. You may use this <StoryLink to="https://forms.gle/vrPuhXooxCL5Tvee6" text="Google form [NEED NEW FORM LINK]"></StoryLink> to get in touch.</p>
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