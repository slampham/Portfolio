import React, { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import ThemeToggler from './ThemeToggler'
import NavLinks from './NavLinks'

const StyledHeader = styled.header`
  height: 80px;
  padding: 20px var(--margin);
  background-color: var(--navy);
  box-shadow: 0 -2px 10px black;

  position: fixed;
  right: 0;
  left: 0;
  z-index: 99;

  transition: transform .25s var(--trans-delay);

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border-color: var(--green);
  }

  @media (min-width: 768px) {
    padding: 20px 50px;
  }
`;

function Header({onClick, windowAtLeastTabletWidth}) {
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
    <StyledHeader {...{menuHidden, ref}}>
      <ThemeToggler />
      {windowAtLeastTabletWidth ? <NavLinks {...{windowAtLeastTabletWidth}}/> : <Hamburger {...{onClick}} />}
    </StyledHeader>
  )
}

export default Header
