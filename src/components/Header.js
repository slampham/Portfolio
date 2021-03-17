import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import ThemeToggler from './ThemeToggler'

const StyledDiv = styled.div`
  height: 5rem;
  padding: var(--margin);
  background-color: var(--navy);

  position: fixed;
  top: -5rem;
  right: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;

  transform: translateY(${({menuHidden}) => menuHidden ? '0' : '5rem'});
  transition: transform .3s;

  button {
    border-color: var(--green);
  }
`;

function Header({onClick}) {
  const [y, setY] = useState(window.scrollY)
  const [menuHidden, setMenuHidden] = useState(false)
  
  const handleScroll = useCallback(e => {
    if (y < window.pageYOffset) {
      setMenuHidden(true)
    }
    else {
      setMenuHidden(false)
    }
    setY(window.pageYOffset)
  }, [y])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <StyledDiv {...{menuHidden}}>
      <ThemeToggler />
      <Hamburger {...{onClick}} />
    </StyledDiv>
  )
}

export default Header
