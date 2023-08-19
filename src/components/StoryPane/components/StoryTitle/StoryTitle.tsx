import React from "react"
import styled from 'styled-components'

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
  font-size: 24px;
  padding-bottom: 8px;
`

export default StoryTitle