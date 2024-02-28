import * as React from 'react';
import SwiperComponent from './SwiperComponent';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import VPS from '../images/VPS.png';
import Dashboard from '../images/Dashboard.png';
import Weigh9 from '../images/Weigh9.png';
import Pokestore from '../images/Pokestore.png';
import PromptVerse from '../images/promtverse.png';

// Import Swiper styles

const data = [
  {
    image: PromptVerse,
    name: 'PromptVerse',
    description: 'blah blah blah',
  },
  {
    image: Weigh9,
    name: 'Weigh9',
    description: 'blah blah blah',
  },
  {
    image: Dashboard,
    name: 'My Dashboard',
    description: 'blah blah blah',
  },
  {
    image: Pokestore,
    name: 'Pokestore',
    description: 'blah blah blah',
  },
  {
    image: VPS,
    name: 'Virtual Patient Simulator',
    description: 'blah blah blah',
  },
];

const Projects = ({ scrollRef }) => {
  return (
    <div className="container" ref={scrollRef}>
      <div className="left">
        <section className="project-bg">
          <h1 className="heading">Projects</h1>
          <div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {data.map((project) => (
                <SwiperSlide>
                  <SwiperComponent
                    image={project.image}
                    name={project.name}
                    description={project.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
