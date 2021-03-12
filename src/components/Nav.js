import React from 'react'
import useToggle from '../hooks/useToggle'
import styled, { css } from 'styled-components'

const StyledNav = styled.nav`
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--margin);
  background-color: #0A192F;
`;

const Menu = styled.ol`
  font: .85rem 'SF Mono';
  background-color: #112240;
  color: #DCFFFF;

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


  > * {
    margin: 2em;
  }

  li {
    &:before {
      content: "0" counter(item) ". ";
      color: #6EFBFF;
    }
    counter-increment: item;
  }

  button {
    width: 50%;
    border-width: 2px;
  }
`;

const Hamburger = css`
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

const X_button = css`
  color: #00BA8D;
  font-size: 30px;
`;

const MenuButton = styled.button`
  outline-style: none;
  border: none;
  position: fixed;
  right: var(--margin);
  padding: 0;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${ props => props.menuOpen ? X_button : Hamburger }
`;

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  function buttonContent() { //!FIXME: not sure if setting up conditional right
    return menuOpen ? 'X' : <><div/><div/><div/></>;
  }

  return (
    <>
      <StyledNav />

      <Menu menuOpen={menuOpen} >
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <button>Resume</button>
      </Menu>

      <MenuButton menuOpen={menuOpen} onClick={toggle}>  
        {buttonContent()}
      </MenuButton>
    </>
  )
}

export default Nav
