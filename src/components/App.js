import React, { useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'

import { Context, ContextProvider } from '../contexts/Context'
import GlobalStyle from '../styles/GlobalStyle'
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
  counter-reset: sectionCounter 1;

  ${StyledSection} {
    padding: 5em 0;
  }
`

function App() {
  const [aboutRef, projectsRef, skillsRef, contactRef] = [useRef(null), useRef(null), useRef(null), useRef(null)]
  let refs = [aboutRef, projectsRef, skillsRef, contactRef]

  return (
    <StyledApp>
      <GlobalStyle/>
      <Nav />
      <Cover ref={aboutRef}/>
      <Section header='Projects' ref={projectsRef}>
        <Projects />
      </Section>
      <Section header='Skills' ref={skillsRef}>
        <Skills />
      </Section>
      <Section header="Let's get in touch!" ref={contactRef}>
        <Contact/>
      </Section>
    </StyledApp>
  );
}

export default App;
