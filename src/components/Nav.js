import React from 'react'
import useToggle from '../hooks/useToggle'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  padding: var(--margin);
  top: 0;
  right: 0;
  left: 0;
  background-color: #0A192F;

  * {
    font: .85rem 'SF Mono';

    :not(button) {
      color: #DCFFFF;
    }
  }

  ol {
    padding: 2em 0 2em 50%;
    padding-left: 50%;
    display: ${props => props.menuOpen ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    counter-reset: item;

    li {
      &:before {
        content: "0" counter(item) ". ";
        color: #6EFBFF;
      }
      counter-increment: item;
    }
  }
`;

const HamburgerMenu = styled.button`
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

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  return (
    <StyledNav menuOpen={menuOpen}>
      <HamburgerMenu onClick={toggle}>  
        <div/>
        <div/>
        <div/>
      </HamburgerMenu>

      <ol>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <button>Resume</button>
      </ol>
    </StyledNav>
  )
}

export default Nav
