import './App.css';
import * as React from 'react';
import Intro from './Components/Intro';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  const scrollRef = React.useRef();
  const projectRef = React.useRef();

  const scrollToDiv = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToProject = () => {
    console.log('clicked');
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <Intro scrollToDiv={scrollToDiv} />
      <div ref={scrollRef}>
        <About scrollToProject={scrollToProject} />
      </div>
      <div ref={projectRef}>
        <Projects scrollRef={projectRef} />
      </div>
    </div>
  );
}

export default App;
