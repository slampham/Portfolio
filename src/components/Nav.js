import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  * {
    font: .85rem 'SF Mono';

    :not(button) {
      color: #DCFFFF;
    }
  }

  ol {
    padding: 2em 0 2em 50%;
    padding-left: 50%;
    display: flex;
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

function Nav() {
  return (
    <StyledNav>
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
