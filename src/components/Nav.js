import React from 'react'
import useToggle from '../hooks/useToggle'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--margin);
  background-color: #0A192F;

  * {
    font: .85rem 'SF Mono';

    :not(button) {
      color: #DCFFFF;
    }
  }
`;

const HamburgerButton = styled.button`
  outline-style: none;
  border: none;
  padding: 0;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    height: 2px;
    width: 40px;
    background-color: #00BA8D;
    margin: 4px 0;

    &:nth-of-type(2) {
      width: 75%;
    }

    &:nth-of-type(3) {
      width: 60%;
    }
  }
`;

const Menu = styled.ol`
  background-color: #112240;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: ${props => props.menuOpen ? 'flex' : 'none'};
  list-style-type: none;
  counter-reset: item;

  li {
    &:before {
      content: "0" counter(item) ". ";
      color: #6EFBFF;
    }
    counter-increment: item;
    margin: 2em;
  }
`;

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  return (
    <StyledNav >
      <HamburgerButton onClick={toggle}>  
        <div/>
        <div/>
        <div/>
      </HamburgerButton>

      <Menu menuOpen={menuOpen} >
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <button>Resume</button>
      </Menu>
    </StyledNav>
  )
}

export default Nav
