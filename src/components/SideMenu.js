import React from 'react'
import styled from 'styled-components'

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

function SideMenu({menuOpen}) {
  return (
    <StyledNav menuOpen={menuOpen} >
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
      <button>Resume</button>
    </StyledNav>
  )
}

export default SideMenu
