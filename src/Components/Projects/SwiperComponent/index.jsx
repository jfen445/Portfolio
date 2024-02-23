import VPS from '../../images/VPS.png';
import Dashboard from '../../images/Dashboard.png';
import Weigh9 from '../../images/Weigh9.png';
import Pokestore from '../../images/Pokestore.png';
import './styles.css';

const SwiperComponent = ({ image }) => {
  return (
    <div className="swiper-container">
      <img src={image} alt="" className="slide-image" />
    </div>
  );
};

export default SwiperComponent;
