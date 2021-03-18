import React from 'react'
import styled from 'styled-components'

const StyledNavLinks = styled.div`
  font: 1rem 'SF Mono';
  color: var(--lightest-slate);

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
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

function NavLinks() {
  return (
    <StyledNavLinks >
      <div>
        <a href="#about"><li>About</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#contact"><li>Contact</li></a>
        <button>Resume</button>
      </div>
    </StyledNavLinks>
  )
}

export default NavLinks
