import React from 'react'

import styled from 'styled-components'

interface StoryPaneProps {
  title: string,
  body: string,
}

const StoryPane: React.FC<StoryPaneProps> = ({ title, body }) => {
    return (
      <Wrapper>
        <h2>{title}</h2>
        <p>{body}</p>
      </Wrapper>
    )
  }

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 4px;
  width: 300px;
`

export default StoryPane