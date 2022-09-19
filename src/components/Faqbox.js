import expand from '../assets/faq-arrow-down.svg';
import collapse from '../assets/faq-arrow-up.svg';
import {useState} from 'react';

const Faqbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-box">
      <div className="header">
        <h2>Why am I not receiving any mails?</h2>
        <img src={isOpen ? collapse : expand} alt="expand/collapse" onClick={() => setIsOpen(isOpen => !isOpen)}/>
      </div>
      {isOpen ? <p></p> : null}
    </div>
  )
}

export default Faqbox;
