import '../MainApp.css';
// import american from './images/american.png';
// import Group from './images/Group.png';
// import Group1 from './images/Group1.png';
import logo from '../images/logo.png';
// import pal from './images/pal.png';
// import visa from './images/visa.png';
import italy from '../images/italy.png';

const NavBar = () => (
  <div className="navbar">
    <img src={logo} alt="" className="logo" />
    <div className="dropdown me-4 lang">
      <button className="btn border-white bg-white text-bg-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={italy} alt="" />
        {' '}
        Italiano
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/">English</a></li>
        <li><a className="dropdown-item" href="/">Arabic</a></li>
        <li><a className="dropdown-item" href="/">Russian</a></li>
      </ul>
    </div>
  </div>
);

export default NavBar;
