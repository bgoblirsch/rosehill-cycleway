import React from "react"
import styled from 'styled-components'

interface StoryLinkProps {
    text: string,
    to: string,
}

const StoryLink: React.FC<StoryLinkProps> = ({ text, to }) => {
  return (
    <StyledLink href={to} target="_blank">
        {text}
    </StyledLink>
  )
}

const StyledLink = styled.a`
    color: white;
`

export default StoryLink