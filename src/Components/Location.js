import '../MainApp.css';
// import american from './images/american.png';
// import Group from './images/Group.png';
// import Group1 from './images/Group1.png';
// import logo from '../images/logo.png';
// import pal from './images/pal.png';
// import visa from './images/visa.png';

const Location = () => (
  <div className="container pt-3">
    <small className="para ps-5 fw-bolder ">01. Prenota ora i tamponi in Drive-in</small>
    <br />
    <div className="location-container ps-5  ms-5 pt-4 mt-4">
      <small className="location-para">
        <i className="bi bi-geo-alt pe-4 h2" />
        {' '}
        ParkingGO Malpensa
      </small>
      <small className="float pe-5 me-5 mt-4">Modiﬁca negozio</small>
    </div>
  </div>
);

export default Location;
