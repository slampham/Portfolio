import React from 'react'
import {ContextProvider} from '../contexts/Context'
import GlobalStyle from '../styles/GlobalStyle'
import styled from 'styled-components'

import Nav from './Nav'
import Cover from './Cover'
import Section, { StyledSection } from './Section'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  counter-reset: sectionCounter;

  ${StyledSection} {
    padding: 5em 0;
  }
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
        <Section header="Let's get in touch!">
          <Contact/>
        </Section>
      </StyledApp>
    </ContextProvider>
  );
}

export default App;
