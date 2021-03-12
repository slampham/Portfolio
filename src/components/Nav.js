import React from 'react'
import useToggle from '../hooks/useToggle'
import styled, { css } from 'styled-components'

const MenuBar = styled.div`
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--margin);
  background-color: #0A192F;
`;

const StyledNav = styled.nav`
  font: .85rem 'SF Mono';
  background-color: #112240;
  color: #DCFFFF;
  list-style-type: none;
  counter-reset: item;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  /*!FIXME: transition kind of ugly. May require using translate past screen */
  left: ${({menuOpen}) => menuOpen ? '25vw' : '100%'}; /* Animations */
  overflow: hidden;
  transition: all 0.3s ease-out;

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

const XButtonStyling = css`
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

const hamburgerStyling = css`
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

  ${ props => props.menuOpen ? hamburgerStyling : XButtonStyling }
`;

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  function buttonContent() {
    return menuOpen ? 'X' : <><div/><div/><div/></>;
  }

  return (
    <>
      <MenuBar />

      <StyledNav menuOpen={menuOpen} >
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <button>Resume</button>
      </StyledNav>

      <MenuButton menuOpen={menuOpen} onClick={toggle}>  
        {buttonContent()}
      </MenuButton>
    </>
  )
}

export default Nav
