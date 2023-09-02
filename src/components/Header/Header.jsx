import { Header } from "./Header.styled";

const header = () => {
  return (
    <Header id="header">
      <div className="navbar">
        <div className="col-12 d-flex justify-content-between align-items-center px-3">
          <ul className="col-12 d-none d-sm-flex justify-content-center m-0 p-0 gap-md-5">
            <li>
              <a className="menu d-flex" href="index.html#invitacion">
                Día y fecha
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#ubicacion">
                Ubicación
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#asistencia">
                Asistencia
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#regalos">
                Regalos
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 divider my-2"></div>
        <ul className="col-12 d-sm-none d-flex justify-content-center m-0 p-0">
          <li>
            <a className="menu-2 d-flex" href="index.html#invitacion">
              Fecha
            </a>
          </li>
          <li>
            <a className="menu-2 d-flex" href="index.html#ubicacion">
              Ubicación
            </a>
          </li>
          <li>
            <a className="menu-2 d-flex" href="index.html#asistencia">
              Asistencia
            </a>
          </li>
          <li>
            <a className="menu-2 d-flex" href="index.html#regalos">
              Regalos
            </a>
          </li>
        </ul>
        <div>
          <span className="ubica d-none d-sm-flex ps-3">
            <i className="bi bi-geo-alt-fill pe-1"></i> Buenos Aires, Argentina.
          </span>
        </div>
      </div>
    </Header>
  );
};

export default header;
