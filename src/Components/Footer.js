/* eslint-disable jsx-a11y/alt-text */
import '../MainApp.css';
// import american from './images/american.png';
// import Group from './images/Group.png';
// import Group1 from './images/Group1.png';
import logo from '../images/logo.png';
// import pal from './images/pal.png';
// import visa from './images/visa.png';

const Footer = () => (
  <div className="container-fluid">
    <footer>
      <div className="footer">
        <div className="row">
          <div className="col-3 pt-3 ps-5 ms-5">
            <img src={logo} />
          </div>
          <div className="col-3 pt-3 ps-5 ms-5">
            <h3 className="text-white fw-bolder">Supporto</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3 pt-3 ps-5 ms-5">
            <small className="text-white fw-bolder">
              Adress, Tirana, Albania
              Email: online@example.com
              Phone: xxx xxx xxx xxx

            </small>
          </div>
          <div className="col-3 pt-3 ps-5 ms-5">
            <small className="pe-4 text-white">Faq</small>
            <small className="pe-3 text-white">Privacy</small>
            <small className="pe-3 text-white">Termini e condizicioni</small>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-5 pt-3 ps-5 ms-5">
            <small className="text-white fw-bolder">
              Adress, Tirana, Albania
              2021 © Created by New Media Communications
              {' '}

            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
