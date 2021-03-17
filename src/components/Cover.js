import React, { useContext } from 'react'
import styled from 'styled-components'
import {Context} from '../contexts/Context'

const StyledCover = styled.section`
  min-height: 100vh;
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
`;

function Cover() {
  const {theme} = useContext(Context)

  return (
    <StyledCover theme={theme}>
      <span>Hi, my name is</span>
      <strong> Spencer Pham. </strong>
      <p>
        I recently graduated from University of California, Davis with a degree in Computer Science, and I'm currently looking for a place to begin working. I have experience in web development (such as React and node.js), and I'm able to pick up new technologies on the fly! Please contact me if you have an open position available.
      </p>
      <button>Contact Me</button>
    </StyledCover>
  )
}

export default Cover