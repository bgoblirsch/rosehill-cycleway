import React from "react"
import styled from 'styled-components'

import ismobilejs from "ismobilejs"
const isBrowser = () => typeof window !== "undefined"
let isMobile:boolean;
if (isBrowser()) {
  isMobile = ismobilejs(window.navigator).any
}

interface StoryTitleProps {
    text: string,
}

const StoryTitle: React.FC<StoryTitleProps> = ({ text }) => {
  return (
    <StyledHeader>
      {text}
    </StyledHeader>
  )
}

const StyledHeader = styled.h1`
  font-size: ${isMobile ? "20px" : "24px"};
  padding-bottom: ${isMobile ? "2px" : "8px"};
`

export default StoryTitle