import Nav from './Nav'
import Cover from './Cover'
import Section from './Section'
import Projects from './Projects'
import GlobalStyle from '../styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav/>
      <Cover/>
      <Section header='About Me'/>
      <Section header='Projects'>
        <Projects />
      </Section>
      <Section header='Skills'/>
      <Section header="Let's get in touch!"/>
    </>
  );
}

export default App;
