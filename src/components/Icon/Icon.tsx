import React, { useMemo } from 'react'
import styled from 'styled-components'


import Home from './icons/Home'
import Bike from './icons/Bike'
import Hourglass from './icons/Hourglass'
import Target from './icons/Target'
import Station from './icons/Station'
import Park from './icons/Park'
import Plan from "./icons/Plan"

import { Icons } from "./IconTypes" 

export interface IconProps {
    color?: string
    faded?: boolean
    filled?: boolean
    name?: Icons
    size?: number
    }

const Icon: React.FC<IconProps> = ({
    color,
    name,
    faded,
    filled,
    size = 28,
    }) => {
    const Child = useMemo(() => {
        const iconColor = color || "white"
        switch (name) {
            case 'home':
                return <Home color={iconColor} size={size} />
            case 'bike':
                return <Bike color={iconColor} size={size} />
            case "plan":
                return <Plan color={iconColor} size={size} />
            case 'hourglass':
                return <Hourglass color={iconColor} size={size} />
            case 'target':
                return <Target color={iconColor} size={size} />
            case 'station':
                return <Station color={iconColor} size={size} />
            case 'park':
                return <Park color={iconColor} size={size} />
            default:
                return null
        }
    }, [color, name, size])
    
    return (
        <StyledIcon size={size} style={{ opacity: 1 }}>
            {Child}
        </StyledIcon>
    )
}

interface StyledIconProps {
    size: number
}

const StyledIcon = styled.div<StyledIconProps>`
  display: inline-flex;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`

export default Icon