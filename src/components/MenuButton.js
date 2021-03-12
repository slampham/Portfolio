import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import ThemeContext from '../contexts/ThemeContext'

const hamburgerStyling = css`
  div {
    height: 2px;
    width: 40px;
    background-color: ${ ({theme}) => theme.green };
    margin: 4px 0;

    &:nth-of-type(2) {
      width: 75%;
    }

    &:nth-of-type(3) {
      width: 60%;
    }
  }
`;

const XButtonStyling = css`
  color: ${ ({theme}) => theme.green };
  font-size: 30px;
`;

const StyledButton = styled.button`
  outline-style: none;
  border: none;
  position: fixed;
  right: var(--margin);
  padding: 0;
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${ props => props.menuOpen ? XButtonStyling : hamburgerStyling }
`;

function MenuButton({ menuOpen, onClick }) {
  const theme = useContext(ThemeContext)

  function buttonContent() {
    return menuOpen ? 'X' : <><div/><div/><div/></>;
  }

  return (
    <StyledButton {...{menuOpen, onClick, theme}}>
      { buttonContent() }
    </StyledButton>
  )
}

export default MenuButton
