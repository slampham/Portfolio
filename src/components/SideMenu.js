import React from 'react'
import styled from 'styled-components'
import XButton from './XButton'

const StyledNav = styled.nav`
  font: 1rem 'SF Mono';

  background-color: var(--light-navy);
  color: var(--lightest-slate);

  position: fixed;  
  top: 0;
  bottom: 0;
  right: 0;
  left: 25vw;
  z-index: 2;

  transition: .2s;
  transform: ${({menuOpen}) => menuOpen ? '0' : 'translate(75vw)'};

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div > * {
    margin: 2em;
  }

  list-style-type: none;
  counter-reset: item;
  li {
    &:before {
      content: "0" counter(item) ". ";
      color: var(--green);
    }
    counter-increment: item;
    color: var(--lightest-slate);
  }

  button {
    width: 50%;
    border-width: 2px;
    color: var(--green);
    border-color: var(--green);
  } 
`;

function SideMenu({menuOpen, onClick}) {
  return (
    <StyledNav {...{menuOpen}}>
      <XButton onClick={onClick} />

      <div>
        <a href="#about"><li>About</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#contact"><li>Contact</li></a>
        <button>Resume</button>
      </div>

    </StyledNav>
  )
}

export default SideMenu
