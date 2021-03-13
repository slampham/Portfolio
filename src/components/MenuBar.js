import { useContext } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--margin);
  background-color: var(--navy);
`;

function MenuBar() {
  return <StyledDiv/>
}

export default MenuBar
