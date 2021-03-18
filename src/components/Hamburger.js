import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  outline-style: none;
  border: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    height: 2px;
    width: 40px;
    background-color: var(--green);
    margin: 4px 0;

    &:nth-of-type(2) {
      width: 75%;
    }

    &:nth-of-type(3) {
      width: 60%;
    }
  }
`;

function Hamburger({ onClick }) {
  return (
    <StyledButton {...{onClick}}>
      <div/><div/><div/>
    </StyledButton>
  )
}

export default Hamburger
