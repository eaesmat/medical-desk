/* eslint-disable jsx-a11y/anchor-is-valid */
import '../MainApp.css';
// import american from './images/american.png';
// import Group from './images/Group.png';
// import Group1 from './images/Group1.png';
// import logo from '../images/logo.png';
// import pal from './images/pal.png';
// import visa from './images/visa.png';

const Cards = () => (
  <div className="container pt-5">
    <small className="para ps-5 fw-bolder ">02. Prenota ora i tamponi in Drive-in</small>
    <br />
    <div className="box ps-5  ms-5 pt-4 mt-4 d-inline-block">
      <small className="box-text text-white">
        Tampone Rapido Antigenico
        {' '}
        <i className="bi bi-info-circle-fill" />
      </small>
      <br />
      <div className="row pt-5 ">
        <div className="col-5">
          <h1 className="fw-bolder text-white">50$</h1>

        </div>

        <div className="col-4 pt-1">

          <div className="dropdown ps-4">
            <button className="btn border-1 border-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              0
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">1</a></li>
              <li><a className="dropdown-item" href="#">2</a></li>
              <li><a className="dropdown-item" href="#">3</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div className="box2 ps-5  ms-5 pt-4 mt-4 d-inline-block">
      <small className="box-text text-white">
        Tampone Rapido Antigenico
        {' '}
        <i className="bi bi-info-circle-fill" />
      </small>
      <br />
      <div className="row pt-5 ">
        <div className="col-5">
          <h1 className="fw-bolder text-white">50$</h1>

        </div>

        <div className="col-4 pt-1">

          <div className="dropdown ps-4">
            <button className="btn border-1 border-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              0
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">1</a></li>
              <li><a className="dropdown-item" href="#">2</a></li>
              <li><a className="dropdown-item" href="#">3</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Cards;
