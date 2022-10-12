import '../scss/home.scss';
import beginarrow from '../assets/begin-journey-arrow.svg';
//import Slideshow from '../components/Slideshow';
import { Link } from 'react-scroll';
import ImageCollage from '../components/ImageCollage';
import backgroundImg from '../assets/home-bg.jpg';


const Home = (props) => {
  return (
    <div className={props.isBlur ? "blur" : ""}>
      {/* Background */}
      <div className="home-bg-container">
        <img src={backgroundImg} className="home-bg-img" />
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

      <div className="congrats-animation">
        <svg width="665" height="196" viewBox="0 0 665 196" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M549.5 106C551.334 102.348 550.417 103.864 552.5 100.5" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="hand-18"/>
          <path d="M506 80.3543C523.307 78.8478 532.546 78.7328 548.5 79.3543" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="hand-17"/>
          <path d="M356.5 80C373.807 78.4935 383.046 78.3784 399 79" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="hand-16"/>
          <path d="M650.404 112.002C648.796 109.331 647.309 108.492 643.904 108.002C641.353 107.967 639.904 108.502 637.904 110.502C635.904 112.502 635.57 113.562 636.904 118.002C641.226 127.189 643.66 132.338 644.904 142.002C643.202 145.797 640.564 147.11 633.904 148.502C627.946 149.601 625.039 149.538 621.404 147.002C620.382 144.533 621.211 142.88 624.904 139.502C629.411 135.935 631.815 134.392 635.904 132.502C643.255 128.566 649.749 125.765 662.404 120.502" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-15"/>
          <path d="M599 116C594.558 124.27 592.165 128.748 588 136.5C597.324 129.276 599.907 125.273 602.5 124C608.755 119.059 612.548 118.08 615.5 117.5C619.614 118.113 619.018 119.559 617 122.5C614.545 127.145 613.82 129.423 613.5 133C613.899 136.312 616.509 135.78 623 133L635.5 126" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-14"/>
          <path d="M561.05 128.627C562.103 123.476 564.05 119.627 570.55 116.127C577.05 112.627 574.55 118.627 580.05 116.127C585.55 113.627 585.55 119.627 585.55 119.627C585.157 124.693 583.731 127.138 580.05 131.127C575.942 134.538 573.24 135.887 566.55 135.627C561.992 135.003 560.717 133.676 561.05 128.627Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-13"/>
          <path d="M544.83 115.5C539.723 124.812 538.283 127.851 537.83 130C535.987 135.207 538.093 136.009 541 136C546.261 135.677 547 135 550.5 133.5C554 132 555.181 130.453 558.5 128.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-12"/>
          <path d="M535.047 57C525.776 76.2251 511.158 111.413 506.547 127C505.268 134.515 506.151 136.742 510.047 137.5C516.457 138.253 520.354 137.165 526.547 133.5C532.203 129.532 533.107 128.494 536.047 126" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-11"/>
          <path d="M490.05 114.5C488.862 111.62 488.805 112.182 485.55 112C481.251 113.036 478.309 114.533 473.05 118.5C467.059 123.386 464.364 128.819 463.55 130.5C462.736 132.181 462.423 136.026 465.55 136C469.492 135.833 471.716 134.766 476.05 132C480.852 128.054 483.33 126.052 487.05 123C485.43 130.418 485.891 132.075 487.55 133.5C489.49 135.26 491.728 134.961 496.55 133.5L503.05 129.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-10"/>
          <path d="M468.047 56C458.776 75.2251 444.158 110.413 439.547 126C438.268 133.515 439.151 135.742 443.047 136.5C449.457 137.253 453.354 136.165 459.547 132.5C466.179 128.966 465.199 127.278 467.5 124.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-9"/>
          <path d="M396.5 111C391.401 122.645 389.703 126.931 388.5 131C387.138 136.808 387.411 138.281 389 139C392.648 139.762 394.737 138.951 398.5 136.5C402.597 133.598 408.167 127.123 419.5 113.5C415.731 122.737 413.695 127.848 414 133.5C415.177 137.181 417.825 136.688 423 135C430.852 130.431 433.469 128.092 437.5 124" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-8"/>
          <path d="M386 57.5C376.729 76.7251 362.11 111.913 357.5 127.5C356.221 135.015 357.104 137.242 361 138C367.409 138.753 371.306 137.665 377.5 134C383.156 130.032 384.06 128.994 387 126.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-7"/>
          <path d="M340.5 114.5C339.312 111.62 339.255 112.182 336 112C331.702 113.036 328.759 114.533 323.5 118.5C317.509 123.385 314.814 128.819 314 130.5C313.186 132.181 312.873 136.026 316 136C319.942 135.833 322.166 134.766 326.5 132C331.303 128.054 333.781 126.052 337.5 123C335.88 130.418 336.341 132.075 338 133.5C339.94 135.259 342.178 134.961 347 133.5L353.5 129.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-6"/>
          <path d="M296 109.5C290 118.7 283.5 131.667 281 137C286.843 127.657 290.258 122.789 297.5 117C302.133 113.498 304.212 112.815 307.5 112.5C312.48 112.995 312 113.5 313 115C314 116.5 312.434 118.458 311 120" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-5"/>
          <path d="M262.5 111C260.792 109.505 258.232 108.043 251 110C247.974 111.544 246.415 112.602 244 115C241.161 118.128 240 122.5 240 122.5C240 122.5 238.825 126.782 238.5 130.5C238.626 133.221 241 135 246.5 133C252 131 256.886 127.365 260 122.5L267 110C254.903 143.202 247.988 162.699 238.5 178.5C233.249 185.78 229.852 188.664 223 191.5C212.792 194.475 206.661 194.235 194.5 188C189.803 185.261 188.542 182.884 190.5 178.5C192.681 173.779 201.486 167.202 212 161L249 141.5L285 124" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-4"/>
          <path d="M201 115.5C196.558 123.77 194.165 128.248 190 136C199.324 128.776 201.907 124.773 204.5 123.5C210.755 118.559 214.548 117.58 217.5 117C221.614 117.613 221.018 119.059 219 122C216.545 126.645 215.82 128.923 215.5 132.5C215.899 135.812 218.509 135.28 225 132.5L234.5 128" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-3"/>
          <path d="M163.5 128.5C164.554 123.349 166.5 119.5 173 116C179.5 112.5 177 118.5 182.5 116C188 113.5 188 119.5 188 119.5C187.608 124.566 186.181 127.01 182.5 131C178.392 134.411 175.69 135.759 169 135.5C164.442 134.876 163.167 133.549 163.5 128.5Z" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-2"/>
          <path d="M215.5 59C225.144 43.691 228.831 36.0377 231.5 24.4999C234.321 15.5797 234.507 13.6981 229 7.49998C225.709 3.23267 215.5 1.08188 195.5 4.99994C175.024 8.58349 159.316 14.1538 122.5 31.4999C80.7683 55.5857 60.6412 70.6711 27 100.5C10.7782 117.074 4.0666 125.883 3 140C3.05794 147.727 8.06376 151.089 20 156.5C36.1282 159.515 45.2238 159.79 61.5 159C84.7017 158.142 95.4381 156.946 112 154C129.655 150.981 138.469 148.992 152.5 145" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="hand-1"/>
        </svg>
      </div>
    </div>
  )
}

export default Home;

{/* 500, 70, 100, 450, 100, 
100, 200, 200, 500, 100, 
200, 100, 100, 100, 200, 
50, 50, 5; */}
