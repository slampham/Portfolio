import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { RiMoonClearFill } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'
import {Context} from '../contexts/Context'

const StyledButton = styled.button`
  padding: 0;
  height: 100%;
  width: ${ ({width}) => width + 'px'};

  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > * {
    transition: color var(--trans-time) ease;
  }
`

function ThemeToggler() {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const {theme, toggleTheme} = useContext(Context)

  useEffect(() => {
    setWidth(3 * ref.current.clientHeight)
  }, []) //!FIXME: may want to change to be dependent on height

  return (
    <StyledButton {...{ref, width, onClick: toggleTheme}} >
      <RiMoonClearFill color={theme === 'light' ? 'gray' : 'white'} />
      <FiSun color={theme === 'light' ? 'yellow' : 'gray'} />
    </StyledButton>
  )
}

export default ThemeToggler
