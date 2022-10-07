import '../scss/home.scss';
import beginarrow from '../assets/begin-journey-arrow.svg';
//import Slideshow from '../components/Slideshow';
import { Link } from 'react-scroll';
import ImageCollage from '../components/ImageCollage';
import Img from 'react-optimized-image';
import backgroundImg from '../assets/home-bg.jpg';


const Home = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      {/* Background */}
      <div className="home-bg-container">
        <Img src={backgroundImg} webp sizes={[500]} className="home-bg-img"/>
      </div>
      <div className="home">
        <div></div>
        <h1>Congratulations</h1>
        <Link to="welcome" smooth={true}>
          <div>
            <p>Begin the journey.</p>
            <img src={beginarrow} alt="arrow" />
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
      {/*<div className="speakers">
        <h2>Speakers</h2>
        <p>We’ve curated a set of incredibly accomplished dignatories. Let’s kick-off your college lives with a healthy dose of wisdom.</p>
        <Slideshow />
      </div> */}
      <div className="youmadeit">
        <h2>You’ve made it.</h2>
        <p>You've made it here. This is a new chapter of your life.</p>
        <p>IIIT Delhi is the epicentre of innovation and excellence in all intellectual pursuits, and we're thrilled to welcome you into our tribe. We believe in excellence and academic rigour, and all the things you'll cherish if you qualified the trials to be eligible for a seat at this prestigious institution.</p>
        <p>We hope our efforts in this Induction program serve their purpose of introducing you to the craziest engineering school of the country, and we hope you share our enthusiam for using technology to make an impact in the world.</p>
        <p>Wishing you luck before you embark on this marvellous journey.
May the force be with you. </p>
      </div>
    </div>
  )
}

export default Home;
