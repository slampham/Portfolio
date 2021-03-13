import Nav from './Nav'
import Cover from './Cover'
import Section from './Section'
import Projects from './Projects'

function App() {
  return (
    <>
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
