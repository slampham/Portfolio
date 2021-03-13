import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { RiMoonClearFill } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'
import useToggle from '../hooks/useToggle'

const StyledButton = styled.button`
  color: gray;
  padding: 0;
  height: 100%;
  width: ${ ({width}) => width + 'px'};

  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > * {
    transition: color 1s ease;
  }
`

function ThemeToggler() {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const [darkTheme, toggle] = useToggle(true)

  useEffect(() => {
    setWidth(3 * ref.current.clientHeight)
  }, []) //!FIXME: may want to change to be dependent on height

  return (
    <StyledButton {...{ref, width, onClick: toggle}} >
      <RiMoonClearFill color={darkTheme && 'white'} />
      <FiSun color={!darkTheme && 'yellow'} />
    </StyledButton>
  )
}

export default ThemeToggler
