import { Asistencia } from "./Asistencia.styled";

const asistencia = () => {
  return (
    <Asistencia id="asistencia" className="row container-fluid m-0 py-5">
      <p className="texto mt-3 d-flex justify-content-center">
        Es muy importante para nosotros
      </p>
      <p className="texto mb-3 d-flex justify-content-center">
        que confirmes tu asistencia
      </p>
      <div className="d-flex justify-content-center ps-5 py-2">
        <a
          className="d-flex flex-column justify-content-center align-items-center ps-5 pt-4"
          href="https://docs.google.com/forms/d/e/1FAIpQLScZW93WCwIIsiK0aygOVfNWny3EE77fjEscSLkmNzYXCs3B1Q/viewform?usp=sharing"
          target="_blank"
        >
          <button className="btn px-4">CONFIRMAR</button>
        </a>
        <img src="/assets/arrow.png" alt="icon" className="icon ps-2 pb-2" />
      </div>
    </Asistencia>
  );
};

export default asistencia;
