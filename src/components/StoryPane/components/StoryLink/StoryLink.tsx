import React from "react"
import styled from 'styled-components'

interface StoryLinkProps {
    text: string,
    to: string,
}

const StoryLink: React.FC<StoryLinkProps> = ({ text, to }) => {
  return (
    <StyledLink href={to}>
        {text}
    </StyledLink>
  )
}

const StyledLink = styled.a`
    color: white;
`

export default StoryLink