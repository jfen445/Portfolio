import * as React from 'react';
import './styles.css';
import profileImage from '../images/profile.jpg';
import SouthIcon from '@mui/icons-material/South';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import data from './particles.js';
import { loadSlim } from 'tsparticles-slim';

const Intro = ({ scrollToDiv }) => {
  console.log('eaffaaaa', data);
  // const particlesInit = async (main) => {
  //   console.log(main);
  //   console.log('eafeaf');
  //   console.log(data);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(main);
  // };

  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
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
