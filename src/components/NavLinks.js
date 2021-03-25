import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import resume from '../static/SpencerPhamResume.pdf'

const StyledNavLinks = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--lightest-slate);

  * {
    margin: 1em;
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

    &:hover {
      color: var(--green);
    }
  }

  button {
    width: min(50%, 200px);
    border-width: 2px;
    color: var(--green);
    border-color: var(--green);
  } 
`;

function NavLinks({className}) {
  return (
    <StyledNavLinks className={className}>
      <HashLink to="/#about"><li>About</li></HashLink>
      <HashLink to="/#projects"><li>Projects</li></HashLink>
      <HashLink to="/#skills"><li>Skills</li></HashLink>
      <HashLink to="/#contact"><li>Contact</li></HashLink>
      <button type='submit' onClick={() => window.open(resume)}>Resume</button>
    </StyledNavLinks>
  )
}

export default NavLinks
