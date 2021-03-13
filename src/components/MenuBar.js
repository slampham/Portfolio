import styled from 'styled-components'
import Hamburger from './Hamburger'

const StyledDiv = styled.div`
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--margin);
  background-color: var(--navy);
`;

function MenuBar({onClick}) {
  return (
    <StyledDiv>
      <Hamburger {...{onClick}} />
    </StyledDiv>
  )
}

export default MenuBar
