import * as React from 'react';
import './styles.css';
import SouthIcon from '@mui/icons-material/South';
import Headshot from '../images/headshot.png';
import LinkedIn from '../images/Linkedin.png';
import GitHub from '../images/Github.png';

const About = ({ scrollToProject }) => {
  const openNewTab = (url) => {
    window.open(url, '_blank').focus();
  };

  return (
    <div className="container">
      <section className="left bg-about">
        <div className="info-section info-section-right">
          <img src={Headshot} alt="" className="headshot" />
          <p className="about">
            Having just graduated from the University of Auckland where I studied a Bachelor of
            Engineering, I am now working at the{' '}
            <a href="https://www.commbank.com.au/">Commonwealth Bank of Australia</a> (CBA) as a
            Software Engineering Graduate. Being a big-4 bank, CBA places a huge emphasis on
            innovation and effectively using technology to help their customers, a value a
            particularly resonate with.
          </p>
          <div className="icon-section">
            <span>
              <img
                src={LinkedIn}
                alt=""
                className="icon"
                onClick={() => openNewTab('https://www.linkedin.com/in/joshuafeng/')}
              />
            </span>
            <span>
              <img
                src={GitHub}
                alt=""
                className="icon"
                onClick={() => openNewTab('https://github.com/jfen445')}
              />
            </span>
          </div>

          {/* <p className="about">I am passionate about building clean code.</p> */}
        </div>
      </section>

      <div className="right">
        <div className="info-section info-section-left">
          <h1>My Journey</h1>
          <p>
            I first started coding during university, and from there I particularly enjoyed the
            problem solving and collaborative nature of the industry. Tackling challenges and
            creating solutions is what drives me in this industry.
          </p>
          <p>
            I have a passion for writing clean code. This is directly translated into my interest of
            designing and creating smooth and seamless websites and applications.
          </p>

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />

          <p className="description">
            My primary languages are <em>TypeScript</em>/<em>JavaScript</em> and <em>Java</em>,
            having used these languages to build production level code bases. These languages have
            been used on top of frameworks such as <em>React</em> and <em>Angular</em> in a
            professional setting.
          </p>
          <div className="coding-section">
            <i class="devicon-typescript-plain code-icon"></i>

            <i class="devicon-javascript-plain code-icon"></i>

            <i class="devicon-java-plain code-icon"></i>
          </div>

          <p className="hide">Other technologies: Git, Express, MongoDB, Azure, Salesforce</p>

          <SouthIcon className="arrow-icon-about hide" onClick={() => scrollToProject()} />
        </div>
      </div>
    </div>
  );
};

export default About;
