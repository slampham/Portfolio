import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  outline-style: none;
  border: none;
  position: absolute;
  top: var(--margin);
  right: var(--margin);
  padding: 0;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--green);
  font-size: 30px;
`;

function XButton({ onClick }) {
  return (
    <StyledButton {...{onClick}}>
      X
    </StyledButton>
  )
}

export default XButton
