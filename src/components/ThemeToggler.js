import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { RiMoonClearFill } from 'react-icons/ri'
// import { FiSun } from 'react-icons/fi'

const StyledButton = styled.button`
  padding: 0;
  height: 100%;
  width: ${ ({width}) => width + 'px'};
`

function ThemeToggler() {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setWidth(ref.current.clientHeight)
    console.log(ref.current)
  }, [width])

  return (
    <StyledButton {...{ref, width}} >
      <RiMoonClearFill/>
    </StyledButton>
  )
}

export default ThemeToggler
