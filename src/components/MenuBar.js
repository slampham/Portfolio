import styled from 'styled-components'
import Hamburger from './Hamburger'
import ThemeToggler from './ThemeToggler'

const StyledDiv = styled.div`
  height: 5rem;
  padding: var(--margin);
  background-color: var(--navy);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
`;

function MenuBar({onClick}) {
  return (
    <StyledDiv>
      <ThemeToggler />
      <Hamburger {...{onClick}} />
    </StyledDiv>
  )
}

export default MenuBar
