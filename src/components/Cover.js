import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Context } from '../contexts/Context'
import Face from '../images/face.jpg'
import { up } from '../variants'

const StyledCover = styled(motion.section)`
  min-height: min(100vh, 1080px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    margin: .5rem 0;
  }

  span {
    font: 1rem 'SF Mono';
    color: ${({theme}) => theme === 'dark' ? 'var(--green)' : 'black'};
  }

  strong {
    font-size: clamp(1rem, 10vw, 4rem);
    color: ${({theme}) => theme === 'dark' ? 'var(--lightest-slate)' : 'black'};
  }

  button {
    margin-top: 4em;
    width: 12em;
  }

  img {
    display: none;
  }

  p {
    max-width: 500px;
  }

  @media (min-width: 768px) {
    div {
      display: flex;
      align-items: center;

      * + * {
        margin-left: 50px;
      }
    }

    img {
      object-fit: cover;
      display: block;
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
  }
`;

function Cover({path}) {
  const {theme} = useContext(Context)

  return (
    <StyledCover theme={theme} id={path}
      transition={{delayChildren: .5, staggerChildren: .1}}
      initial='hidden' animate='show'
    >
      <motion.span variants={up}>Hi, my name is</motion.span>
      <motion.strong variants={up}> Spencer Pham. </motion.strong>
      <motion.div variants={up}>
        <p>
          I recently graduated from University of California, Davis with a degree in Computer Science, and I'm currently looking for a place to begin working. I have experience in web development (such as React and node.js), and I'm able to pick up new technologies on the fly! Please contact me if you have an open position available.
        </p>
        <img src={Face} alt='face' />
      </motion.div>

      <motion.button onClick={() => window.location.href='mailto:spencernpham@gmail.com'} variants={up}>Contact Me</motion.button>
    </StyledCover>
  )
}

export default Cover