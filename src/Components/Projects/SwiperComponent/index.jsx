import './styles.css';

const SwiperComponent = ({ image, name, description }) => {
  return (
    <div className="swiper-container img-wrapper">
      <img src={image} alt="" className="slide-image blur" />
      <div class="content fade">
        <h1>{name}</h1>
        {description}
      </div>
    </div>
  );
};

export default SwiperComponent;
