import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'


interface NavButtonProps {
    text: string,
    icon: any
}

const NavButton: React.FC<NavButtonProps> = ({ icon, text }) => {
  return (
    <>
      <IconWrapper>
        {icon}
      </IconWrapper>
      
      {text}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #233044;
  gap: 8px;
  padding: 4px;
  padding-right: 8px;
  width: 200px;
  color: white;
`

const IconWrapper = styled.div`
  padding: 4px;
`

export default NavButton