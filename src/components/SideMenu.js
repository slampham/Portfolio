import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../contexts/ThemeContext'

const StyledNav = styled.nav`
  font: .85rem 'SF Mono';
  background-color: ${ ({theme}) => theme['light navy'] };
  color:  ${ ({theme}) => theme['lightest slate'] };
  backdrop-filter: blur(1px);

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
  transition: all .2s ease-out;

  > * {
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

function SideMenu({menuOpen}) {
  const theme = useContext(ThemeContext) //!FIXME: not sure if useContext needs to be inside render

  return (
    <StyledNav {...{menuOpen, theme}}>
      <a href="#about"><li>About</li></a>
      <a href="#projects"><li>Projects</li></a>
      <a href="#skills"><li>Skills</li></a>
      <a href="#contact"><li>Contact</li></a>
      <button>Resume</button>
    </StyledNav>
  )
}

export default SideMenu
