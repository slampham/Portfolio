import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import resume from '../static/SpencerPhamResume.pdf'

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

const container = {
  show: {
    transition: {
      delayChildren: .25,
      staggerChildren: .1,
    }
  }
}

const item = {
  hidden: { 
    opacity: 0,
    y: -50
   },
  show: { 
    opacity: 1 ,
    y: 0
  }
}

function NavLinks({windowAtLeastTabletWidth}) {
  return (
    <StyledLinks {...{windowAtLeastTabletWidth}} variants={container} initial='hidden' animate='show' >
      <motion.a href="#about" variants={item}><li>About</li></motion.a>
      <motion.a href="#projects" variants={item}><li>Projects</li></motion.a>
      <motion.a href="#skills" variants={item}><li>Skills</li></motion.a>
      <motion.a href="#contact" variants={item}><li>Contact</li></motion.a>
      <motion.button type='submit' onClick={() => window.open(resume)} variants={item}>Resume</motion.button>
    </StyledLinks>
  )
}

export default NavLinks
