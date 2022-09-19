import './scss/slideshow.scss';
import img1 from '../assets/Speaker1.png';
import img2 from '../assets/Speaker2.png';
import img3 from '../assets/Speaker3.png';
import {useEffect} from 'react';

const Slideshow = () => {
  const list = [
    {
      id: 0,
      src: img1,
      state: '',
    },
    {
      id: 1,
      src: img2,
      state: '',
    },
    {
      id: 2,
      src: img3,
      state: '',
    }
  ];
  
  useEffect(() => {
    setInterval(() => {

    })
  });

  return (
    <div className="slideshow">
    </div>
  )
}

export default Slideshow;
