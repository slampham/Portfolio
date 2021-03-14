import React from 'react'

import {ContextProvider} from '../contexts/Context'
import Nav from './Nav'
import Cover from './Cover'
import Section from './Section'
import Projects from './Projects'
import GlobalStyle from '../styles/GlobalStyle'

function App() {
  return (
    <ContextProvider>
      <GlobalStyle/>
      <Nav/>
      <Cover/>
      <Section header='About Me'/>
      <Section header='Projects'>
        <Projects />
      </Section>
      <Section header='Skills'/>
      <Section header="Let's get in touch!"/>
    </ContextProvider>
  );
}

export default App;
