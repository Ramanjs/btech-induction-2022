import '../scss/home.scss';
import inductionlogo from '../assets/induction-logo.svg';
import SouthIcon from '@mui/icons-material/South';
import Slideshow from '../components/Slideshow';
import { Link } from 'react-scroll';
//import imagecollage from '../assets/home-img-bg.webp';
import ImageCollage from '../components/ImageCollage';


const Home = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      <div className="home">
        <img src={inductionlogo} alt="induction logo" />
        <h1>Congratulations</h1>
        <Link to="welcome" smooth={true}>
          <div>
            <p>Begin the journey.</p>
            <SouthIcon />
          </div>
        </Link>
      </div>
      <div className="welcome" id="welcome">
        <div><p>“We know what we are, but know not what we may be.”</p>
          <p>- William Shakespeare</p></div>
        <h2>Welcome,</h2>
        <p>Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) was created by an act of Delhi legislature empowering it to carry out R&D, conduct educational programs, and grant degrees. The General Council is the apex body of the Institute, chaired by Hon'ble Lt. Governor of Delhi and the Board of Governors is the policy and decision-making body of the Institute. The Senate is empowered to take all academic decisions.</p>

        <p>IIIT-Delhi is accelerating on the path of becoming one of the leading comprehensive research-led teaching institutes in India and has proven to be consistently responsive towards the evolving needs of society. The faculty members at IIIT-Delhi are among the finest in the country and are internationally recognized. Carrying out cutting-edge research is in the institutional DNA of IIIT-Delhi.</p>
      </div>
      <ImageCollage />
      <div className="speakers">
        <h2>Speakers</h2>
        <p>We’ve curated a set of incredibly accomplished dignatories. Let’s kick-off your college lives with a healthy dose of wisdom.</p>
        <Slideshow />
      </div>
    </div>
  )
}

export default Home;
