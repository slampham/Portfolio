import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { RiMoonClearFill } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'
import { Context } from '../contexts/Context'

const StyledButton = styled(motion.button)`
  padding: 0;
  height: 100%;
  width: ${ ({width}) => width + 'px'};

  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > * {
    transition: color var(--trans-time) var(--trans-delay);
  }
`

function ThemeToggler() {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)
  const {theme, toggleTheme} = useContext(Context)

  useEffect(() => {
    setWidth(2.5 * ref.current.clientHeight)
  }, [ref]) //!FIXME: may want to change to be dependent on height

  return (
    <StyledButton {...{ref, width, onClick: toggleTheme}} 
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0, transition: {delay: .25}}}
    >
      <RiMoonClearFill color={theme === 'light' ? 'gray' : 'white'} />
      <FiSun color={theme === 'light' ? 'yellow' : 'gray'} />
    </StyledButton>
  )
}

export default ThemeToggler
