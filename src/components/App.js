import './App.css';

import Cover from './Cover/Cover'
import Section from './Section/Section';
import Projects from './Projects/Projects'

function App() {
  return (
    <div className="App">
      <Cover/>
      <Section header='Projects'>
        <Projects />
      </Section>
      <Section header='Skills'/>
      <Section header='Contact Me' />
    </div>
  );
}

export default App;
