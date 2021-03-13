import React from 'react'
import styled from 'styled-components'
import { RiMoonClearFill } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'

const StyledButton = styled.button`
  
`

function ThemeToggler() {
  return (
    <StyledButton>
      <RiMoonClearFill/>
      <FiSun/>
    </StyledButton>
  )
}

export default ThemeToggler
