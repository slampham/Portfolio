import React from 'react'
import styled from 'styled-components'
import XButton from './XButton'
import NavLinks from './NavLinks'

const StyledNav = styled.nav`
  font: 1rem 'SF Mono';
  background-color: var(--light-navy);
  
  position: fixed;  
  top: 0;
  bottom: 0;
  right: 0;
  left: 25vw;
  z-index: 2;

  transition: .2s;
  transform: ${({menuOpen}) => menuOpen ? '0' : 'translate(75vw)'};
`;

function SideMenu({menuOpen, onClick}) {
  return (
    <StyledNav {...{menuOpen}}>
      <XButton onClick={onClick} />
      <NavLinks/>
    </StyledNav>
  )
}

export default SideMenu
