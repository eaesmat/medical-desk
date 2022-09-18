/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import './MainApp.css';
// import american from './images/american.png';
// import Group from './images/Group.png';
// import Group1 from './images/Group1.png';
// import logo from './images/logo.png';
// import pal from './images/pal.png';
// import visa from './images/visa.png';
// eslint-disable-next-line import/no-named-as-default-member
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Location from './Components/Location';
import Cards from './Components/Cards';
import Buttons from './Components/Buttons';
import Form from './Components/Form';
import Footer from './Components/Footer';

const MainApp = () => (
  <div>
    <NavBar />
    <div className="container">
      <Main />
      <Location />
      <Cards />
      <Buttons />
      <Form />
    </div>
    <Footer />
  </div>

);

export default MainApp;
