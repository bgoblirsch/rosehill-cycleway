import React from 'react'

import { IconProps } from '../Icon'

const Plan: React.FC<IconProps> = ({ color, size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 56 56"
    width={size}
    fill={color}
  >
    <path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
    <path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
    <path d="M16 31L22 37L34 25" stroke="black" stroke-width="4"/>
    <path d="M16 5V13" stroke="black" stroke-width="4" stroke-linecap="round"/>
    <path d="M32 5V13" stroke="black" stroke-width="4" stroke-linecap="round"/>
  </svg>
)

export default Plan