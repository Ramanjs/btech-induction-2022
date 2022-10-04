import '../scss/navbar.scss';
import { NavLink } from 'react-router-dom';
import close from '../assets/cross.svg';
import hamburger from '../assets/hamburger.png';

const Navbar = (props) => {
  const toggleNav = () => {
    props.setIsNavExpanded(!props.isNavExpanded);
  }

  return (
    <div className="navbar" style={{position: 'relative'}}>
      {!props.isNavExpanded ? <img src={hamburger} alt="menu icon" onClick={() => props.setIsNavExpanded(!props.isNavExpanded)} className="nav-hamburger" /> : null }
      <div className={props.isNavExpanded ? "nav-menu nav-expanded" : "nav-menu"}>
        <ul className="nav-list">
          <li onClick={() => toggleNav()}><img src={close} alt="close button" className="nav-close" /></li>
          <li><NavLink to="/home" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink></li>
          <li><NavLink to="/schedule" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Schedule</NavLink></li>
          <li><NavLink to="/contact" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Contact</NavLink></li>
          <li><NavLink to="/faq" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>FAQs</NavLink></li>
          <li><NavLink to="/team" onClick={() => toggleNav()} className={({ isActive }) => isActive ? "nav-active" : ""}>Our Team</NavLink></li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
