import './scss/slideshow.scss';
import img1 from '../assets/Speaker1.png';
import img2 from '../assets/Speaker2.png';
import img3 from '../assets/Speaker3.png';

const Slideshow = () => {
  return (
    <div className="slideshow">
      <div className="carousel js-flickity" data-flickity='{ "cellAlign": "center", "contain": true, "wrapAround": true, "autoPlay": true, "pageDots": false }'>
        <div className="carousel-cell">
          <img src={img1} alt="speaker" />
        </div>
        <div className="carousel-cell">
          <img src={img2} alt="speaker" />
        </div>
        <div className="carousel-cell">
          <img src={img3} alt="speaker" />
        </div>
      </div>
    </div>
  )
}

export default Slideshow;
