/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../MainApp.css';
import american from '../images/american.png';
import Group from '../images/Group.png';
// import Group1 from '../images/Group1.png';
// import logo from '../images/logo.png';
import pal from '../images/pal.png';
import visa from '../images/visa.png';

const Form = () => (
  /* eslint-disable max-len */
  <div className="container ps-5">
    <small className="para fw-bolder ">
      04. Dati anagrafici

    </small>
    {' '}
    <br />
    <div className="row">
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Name</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Email</label>
            <input type="text" className="form-control broder border-info p-2" />
            <small>
              La conferma verrà invita a questa mail.
              Si richiede di utilizzare la mail propria personale non mail aziendali

            </small>
          </div>

        </form>
      </div>

      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Cogname</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Cellulare</label>
            <input type="text" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>

      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Nazionalita</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Data di nascita</label>
            <input type="date" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>

      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Code di fiscale</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Sesso</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" htmlFor="flexRadioDefault2" />
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

        </form>
      </div>

      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Comune residenca</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Indirizzo</label>
            <input type="text" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Cap</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />
          </div>
        </form>
      </div>

    </div>
    <div className="form-check pt-3">
      <input className="form-check-input" type="checkbox" value="" />
      <label className="form-check-label label" htmlFor="defaultCheck1">
        Ho preso visione dell’informativa sul trattamento dei miei dati personali e i Termini e Condizioni *(leggi)
      </label>
    </div>
    <div className="form-check pt-3">
      <input className="form-check-input" type="checkbox" value="" />
      <label className="form-check-label label" htmlFor="defaultCheck1">
        Ho preso visione dell’informativa sul trattamento dei miei dati personali e do il consenso al loro trattamento da parte di Medispa S.r.l. quale unico Responsabile Esterno del trattamento dei dati sanitari. * (leggi)
      </label>
    </div>
    <div className="pt-3">
      <a href="" className="btn btn-lg px-5 button fw-bolder">AVANTI</a>
    </div>
    <div className="col pt-4">
      <small className="para fw-bolder ">
        05. Tipo di ricevuta
      </small>
      <br />
      <small className="label">A chi dovrà essere intestata la fattura?</small>
      <br />
      <a href="/" className="btn btn-lg profile-button fw-bolder mt-3">
        <h1 className="d-inline">
          {' '}
          <i className="bi bi-people-fill text-info " />
        </h1>
        {' '}
        <h6 className="label d-inline ps-5">Azienda</h6>
      </a>

      <a href="/" className="btn btn-lg profile-button1 fw-bolder mt-3 ms-3">
        <h1 className="d-inline">
          {' '}
          <i className="bi bi-people-fill text-white " />
        </h1>
        {' '}
        <h6 className="label d-inline ps-5 text-white">Azienda</h6>
      </a>
    </div>
    <div className="row pt-3">
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Nome</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Codice Fiscale</label>
            <input type="text" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Cogname</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Email invio fattura</label>
            <input type="text" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Indirizzo</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Cap</label>
            <input type="text" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Citta</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Provinzia</label>
            <input type="text" className="form-control broder border-info p-2" />
          </div>

        </form>
      </div>
      <div className="col-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label fw-bold">Nazione</label>
            <input type="email" className="form-control broder border-info p-2" id="exampleInputEmail1" />

          </div>

        </form>
      </div>
      <div className="pt-3">
        <a href="" className="btn btn-lg px-5 button fw-bolder">VERIFICA</a>
      </div>
    </div>

    <div className=" pt-5">
      <small className="para fw-bolder ">
        06. Metodo di pagamento
      </small>
      {' '}
      <br />
      <small className="label pe-5 me-1">Carta di credito</small>
      <small className="">
        <img src={visa} />
        {' '}
        <img src={american} />
        {' '}
        <img src={Group} />
      </small>
    </div>
    <div className="col bank-form p-3">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Provinzia</label>
              <input type="text" className="form-control broder border-info p-2" />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Data di scandeza</label>
              <input type="text" className="form-control broder border-info p-2" />
            </div>
          </form>
        </div>
        <div className="col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">CVC/CVV</label>
              <input type="text" className="form-control broder border-info p-2" />
            </div>
          </form>
        </div>
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label label fw-bold">Nome sualla carta</label>
              <input type="text" className="form-control broder border-info p-2" />
            </div>
          </form>
        </div>
      </div>

    </div>
    <div className="form-check pt-4">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
      <label className="form-check-label label" htmlFor="flexRadioDefault1">
        PayPal
      </label>
      <img src={pal} className="pay" alt="" />
      {' '}
      <small className="label">Che cos’e PayPal?</small>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
      <label className="form-check-label label" htmlFor="flexRadioDefault2">
        GooglePay
      </label>
    </div>

    <div className="form-check pt-3">
      <input className="form-check-input" type="checkbox" value="" />
      <label className="form-check-label label" htmlFor="defaultCheck1">
        Ho preso visione dell’informativa sul trattamento dei miei dati personali e i Termini e Condizioni *(leggi)
      </label>
    </div>
    <div className="form-check pt-3">
      <input className="form-check-input" type="checkbox" value="" />
      <label className="form-check-label label" htmlFor="defaultCheck1">
        Ho presa visione dell’informativa sul trattamento dei miei dati personali e do il consenso al loro trattamento da parte di Medispa S.r.l. quale unico Responsabile Esterno del trattamento dei dati sanitari. * (leggi)
      </label>
    </div>
    <div className="form-check pt-3">
      <input className="form-check-input" type="checkbox" value="" />
      <label className="form-check-label label" htmlFor="defaultCheck1">
        Ho preso visione dell’informativa sul trattamento dei miei dati personali e do il consenso al loro trattamento da parte di Medispa S.r.l. quale unico Responsabile Esterno del trattamento dei dati sanitari. * (leggi)
      </label>
    </div>
    <div>
      <a href="" className="btn btn-lg px-5 button1">VERIFICA</a>
    </div>

  </div>
);

export default Form;
