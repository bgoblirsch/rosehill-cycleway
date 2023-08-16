import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Drawer, List, Stack } from "@mui/material";
import NavButton from "./components/NavButton";
import appRoutes from "../../routes/appRoutes";

const navButtons = [
    {
        icon: "home",
        to: "/",
        text: "Project Overview",
        state: "overview"
    },
    {
        icon: "bike",
        to: "/existing-routes",
        text: "Existing Bike Routes",
        state: "existing"
    },
    {
        icon: "hourglass",
        to: "/future-routes",
        text: "Future Bike Routes",
        state: "future"
    },
]

const SideNav: React.FC = () => {
    return (
      <Wrapper>
        {navButtons.map((button, index) =>
            <NavButton to={button.to} icon={button.icon} text={button.text} state={button.state} />
        )}
      </Wrapper>
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

export default SideNav