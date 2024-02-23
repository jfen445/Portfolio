import * as React from 'react';
import SwiperComponent from './SwiperComponent';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import VPS from '../images/VPS.png';
import Dashboard from '../images/Dashboard.png';
import Weigh9 from '../images/Weigh9.png';
import Pokestore from '../images/Pokestore.png';

// Import Swiper styles

const Projects = ({ scrollRef, scrollToDiv }) => {
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
              <SwiperSlide>
                <SwiperComponent image={VPS} />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComponent image={Dashboard} />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComponent image={Weigh9} />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComponent image={Pokestore} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
