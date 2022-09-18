/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../MainApp.css';
// import american from './images/american.png';
// import Group from './images/Group.png';
// import Group1 from './images/Group1.png';
// import logo from '../images/logo.png';
// import pal from './images/pal.png';
// import visa from './images/visa.png';

const Buttons = () => (
  <div className="container ps-5 ms-1">
    <small className="para fw-bolder ">
      03. Scegli fra le date e orari disponibili
    </small>
    <br />
    <div className="row">

      <div className="col">
        <small className=" fw-bold label">Date</small>
        <br />
        <button className="btn gary px-4 mt-3 text-secondary">lunedì27</button>
        <button className="btn ms-3 px-4 mt-3 gary text-secondary">lunedì27</button>
        <button className="btn blue ms-3 px-4 mt-3 text-white">lunedì27</button>
        <button className="btn btn-outline-info ms-3 px-4 mt-3">lunedì27</button>
        <button className="btn btn-outline-info ms-3 px-4 mt-3 ">lunedì27</button>
        <button className="btn btn-outline-info ms-3 px-4 mt-3 ">lunedì27</button>
        <button className="btn btn-outline-info ms-3 px-4 mt-3 ">lunedì27</button>
        <button className="btn btn-outline-info ms-3 px-4 mt-3">lunedì27</button>
        <button className="btn btn-outline-info  px-4  mt-3 ">lunedì27</button>
        <button className="btn btn-outline-info ms-3 px-4 mt-3 ">lunedì27</button>
      </div>
    </div>

    <div className="row  pt-3">

      <div className="col">
        <small className="fw-bold label ">Orari</small>
        <br />
        <button className="btn gary px-5 mt-2 text-secondary ">10:00</button>
        <button className="btn ms-3 px-5 mt-2 gary text-secondary">10:00</button>
        <button className="btn blue ms-2 px-5 mt-2 text-white">10:00</button>
        <button className="btn btn-outline-info ms-2 px-5 mt-2">10:00</button>
        <button className="btn btn-outline-info ms-2 px-5 mt-2 ">10:00</button>
        <button className="btn btn-outline-info ms-2 px-5 mt-2 ">10:00</button>
        <button className="btn btn-outline-info ms-2 px-5 mt-2 ">10:00</button>
        <button className="btn btn-outline-info  px-5 mt-2">10:00</button>
        <button className="btn btn-outline-info ms-2 px-5 mt-2 ">10:00</button>
        <button className="btn btn-outline-info ms-2 px-5 mt-2 ">10:00</button>
      </div>
    </div>
  </div>
);

export default Buttons;
