import { useContext } from 'react';
import styled from 'styled-components'
import ThemeContext from '../contexts/ThemeContext'

const StyledDiv = styled.div`
  height: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: var(--margin);
  background-color: ${ ({theme}) => theme.navy };
`;

function MenuBar() {
  const theme = useContext(ThemeContext)
  return <StyledDiv {...{theme}} />
}

export default MenuBar
