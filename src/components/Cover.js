import React from 'react'
import styled from 'styled-components'

const StyledCover = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Cover() {
  return (
    <StyledCover>
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