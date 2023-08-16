import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector } from "react-redux"
import { RootState } from "src/redux/store";

interface NavButtonProps {
    to: string,
    text: string,
    icon: string,
    state: string
}

const NavButton: React.FC<NavButtonProps> = ({ icon, state, text, to }) => {
        const { appState } = useSelector((state: RootState) => state.appState);
        return (
            <ListItemButton
                component={Link}
                to={to}
                sx={{
                "&: hover": {
                    backgroundColor: "rgb(15, 58, 41)"
                },
                backgroundColor: appState === state ? "rgb(10, 40, 30)" : "unset",
                paddingY: "12px",
                paddingX: "24px"
                }}
            >
            <ListItemIcon sx={{
              color: "#eeeeee"
            }}>
              {icon}
            </ListItemIcon>
            {text}
          </ListItemButton>
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

export default NavButton