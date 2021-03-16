import React from 'react'
import {ContextProvider} from '../contexts/Context'
import GlobalStyle from '../styles/GlobalStyle'
import styled from 'styled-components'

import Nav from './Nav'
import Cover from './Cover'
import Section from './Section'
import Projects from './Projects'
import Skills from './Skills'

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
        <Section header='Projects'>
          <Projects />
        </Section>
        <Section header='Skills'>
          <Skills />
        </Section>
        <Section header="Let's get in touch!"/>
      </StyledApp>
    </ContextProvider>
  );
}

export default App;
