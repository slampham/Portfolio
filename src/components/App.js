import styled from 'styled-components'

import Nav from './Nav'
import Cover from './Cover'
import Section from './Section'
import Projects from './Projects'

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <Nav/>
      <Cover/>
      <Section header='About Me'/>
      <Section header='Projects'>
        <Projects />
      </Section>
      <Section header='Skills'/>
      <Section header="Let's get in touch!"/>
    </StyledApp>
  );
}

export default App;
