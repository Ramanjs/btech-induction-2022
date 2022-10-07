import './scss/Footer.scss';
import iiitdlogo from '../assets/iiitd-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="iiitd-address">
        <img src={iiitdlogo} alt="iiitd" />
        <span>Okhla Industrial Estate, Phase III, near Govind Puri Metro Station</span>
        <span>New Delhi, Delhi 110020</span>
      </div>
      <div className="links">
        <p>Website Designed & Developed By</p>
        <h2><a href="https://www.linkedin.com/in/adityagirdhar/">Aditya Girdhar</a> & <a href="https://www.linkedin.com/in/ramanjeet-singh-340754229/">Ramanjeet Singh</a></h2>
      </div>
    </div>
  )
}

export default Footer;
