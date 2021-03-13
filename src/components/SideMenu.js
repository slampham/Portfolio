import React from 'react'
import styled from 'styled-components'
import XButton from './XButton'

const StyledNav = styled.nav`
  font: 1rem 'SF Mono';
  font-family: 'SF Mono';

  background-color: var(--light-navy);
  color: var(--lightest-slate);

  position: fixed;  
  top: 0;
  bottom: 0;
  right: 0;

  /*!FIXME: transition kind of ugly. May require using translate past screen */
  left: ${({menuOpen}) => menuOpen ? '25vw' : '100%'}; /* Animations */
  overflow: hidden;
  transition: all .2s ease-out;

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
      color: ${ ({theme}) => theme.green };
    }
    counter-increment: item;
  }

  button {
    width: 50%;
    border-width: 2px;
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
