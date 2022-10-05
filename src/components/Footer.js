import './scss/Footer.scss';
import iiitdlogo from '../assets/iiitd-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={iiitdlogo} alt="iiitd" />
      <div>
        <p>Website Designed & Developed By</p>
        <h2><a href="">Aditya Girdhar</a> & <a href="">Ramanjeet Singh</a></h2>
      </div>
    </div>
  )
}

export default Footer;
