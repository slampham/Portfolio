import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import ThemeToggler from './ThemeToggler'

const StyledDiv = styled.header`
  height: 80px;
  padding: 20px var(--margin);
  background-color: var(--navy);

  position: fixed;
  right: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;

  transition: transform .3s;

  button {
    border-color: var(--green);
  }

  @media (min-width: 768px) {
    padding: 20px 50px;
  }
`;

function Header({onClick}) {
  const [y, setY] = useState(window.scrollY)
  const [menuHidden, setMenuHidden] = useState(false)
  const ref = useRef(null)
  
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

  useEffect(() => {
    let header = ref.current
    header.style.top = `-${header.clientHeight}px`
  }, [ref])

  useEffect(() => {
    let header = ref.current
    header.style.transform = `translateY(${menuHidden ? '0' : header.clientHeight + 'px'})`
  }, [menuHidden])

  return (
    <StyledDiv {...{menuHidden, ref}}>
      <ThemeToggler />
      <Hamburger {...{onClick}} />
    </StyledDiv>
  )
}

export default Header
