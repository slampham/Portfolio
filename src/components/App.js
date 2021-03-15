import React from 'react'

import {ContextProvider} from '../contexts/Context'
import Nav from './Nav'
import Cover from './Cover'
import Section from './Section'
import Projects from './Projects'
import GlobalStyle from '../styles/GlobalStyle'
import styled from 'styled-components'

const StyledApp = styled.div`
  counter-reset: sectionCounter;
`

function App() {
  return (
    <ContextProvider>
      <StyledApp>
        <GlobalStyle/>
        <Nav/>
        <Cover/>
        <Section header='About Me'/>
        <Section header='Projects'>
          <Projects />
        </Section>
        <Section header='Skills'/>
        <Section header="Let's get in touch!"/>
      </StyledApp>
    </ContextProvider>
  );
}

export default App;
