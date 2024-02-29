import * as React from 'react';
import './styles.css';
import SouthIcon from '@mui/icons-material/South';
import Particles from 'react-tsparticles';
import data from './particles.js';
import { loadSlim } from 'tsparticles-slim';

const Intro = ({ scrollToDiv }) => {
  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
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
          <div className="intro">JOSHUA FENG</div>
          <div>New Zealand born Software Developer based in Melbourne, Australia</div>
          <SouthIcon className="arrow-icon" onClick={() => scrollToDiv()} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
