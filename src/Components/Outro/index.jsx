import * as React from 'react';
import './styles.css';
import Particles from 'react-tsparticles';
import data from './particles.js';
import { loadSlim } from 'tsparticles-slim';

const Outro = ({ scrollToDiv }) => {
  const particlesInit = React.useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="container">
      <div className="left">
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={data} />
        <div className="infosection">
          <div className="intro">LET'S GET IN TOUCH !</div>
        </div>
      </div>
    </div>
  );
};

export default Outro;
