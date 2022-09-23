import './scss/slideshow.scss';
import img1 from '../assets/Speaker1.png';
import img2 from '../assets/Speaker2.png';
import img3 from '../assets/Speaker3.png';
import { useState, useEffect, useRef } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slideshow = () => {
  const [index, setIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transitions, setTransitions] = useState('');
  const [slideId, setSlideId] = useState(0);

  useEffect(() => {
    setSlideWidth(860);
    setTranslate(-1 * slideWidth * index);
    setSlideId(setInterval(() => {
      moveToNextSlide();
    }, 3000));
  });

  const moveToNextSlide = () => {
    let newIndex = index + 1;
    setIndex(newIndex);
    setTransitions('.7s ease-out');
    let distance = -1 * slideWidth * newIndex;
    setTranslate(distance);
  }

  //const moveToPrevSlide = () => {
    //int newIndex = index - 1;
    //setIndex(index => (index == 1) ? 5 : index - 1);
    //setTransitions('1.5s ease-out');
    //let distance = -1 * slideWidth * index;
    //setTranslate(distance);
  //}

  //useEffect(() => {
    //if (index == 5) {
      //setIndex(1);
      //setTransitions('none');
      //let distance = -1 * slideWidth;
      //setTranslate(distance);
    //} else if (index == 1) {
      //set
    //}
  //}, [index]);

  const list = [
    {
      id: 3,
      src: img3,
    },
    {
      id: 0,
      src: img1,
    },
    {
      id: 1,
      src: img2,
    },
    {
      id: 2,
      src: img3,
    },
    {
      id: 4,
      src: img1,
    },
  ];

  return (
    <div className="slideshow">
      <div className="slides" style={{transform: 'translateX(' + translate + 'px)', transition: transitions}} >
        {list.map(image => (
          <div className="slide">
            <img key={image.id} src={image.src} alt="speaker" />
          </div>
        ))}
      </div>
      <div className="slide-controls">
        <button id="prev-btn">
          <ArrowBackIosNewIcon className="arrow" />
        </button>
        <button id="next-btn">
          <ArrowForwardIosIcon className="arrow" />
        </button>
      </div>
    </div>
  )
}

export default Slideshow;
