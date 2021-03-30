import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import resume from '../static/SpencerPhamResume.pdf'
import { stagger, down } from '../variants'

const StyledLinks = styled(motion.ul)`
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

  ${({windowAtLeastTabletWidth}) => windowAtLeastTabletWidth && `
      flex-direction: row;
      font-family: 'SF Mono';

      * {
        font-size: .75rem;
        margin: .5em;
      }

      button {
        padding: 0;
        width: 7em;
        height: 3em;
      }
    `
  }
`;

function NavLinks({windowAtLeastTabletWidth}) {
  return (
    <StyledLinks {...{windowAtLeastTabletWidth}} variants={stagger} initial='hidden' animate='show' >
      <motion.a href="#about" variants={down}><li>About</li></motion.a>
      <motion.a href="#projects" variants={down}><li>Projects</li></motion.a>
      <motion.a href="#skills" variants={down}><li>Skills</li></motion.a>
      <motion.a href="#contact" variants={down}><li>Contact</li></motion.a>
      <a href={resume} target="_blank"><motion.button variants={down}>Resume</motion.button></a>
    </StyledLinks>
  )
}

export default NavLinks
