import { useState } from "react";
import Modal from "../Modal/Modal";
import { About } from "./About.styled";

const about = () => {
  const [statusModal, changeStatus] = useState(false);

  return (
    <About
      id="about"
      className="row container-fluid d-flex justify-content-center fondo-presentacion m-0"
    >
      <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center mt-2">
        <img
          src="/assets/Brujula.webp"
          alt="Avatar"
          className="w-50 d-lg-none floating"
        />
        <img
          src="/assets/Brujula.webp"
          alt="Ilustracion Brujula"
          className="avatar-bruju-lg d-none d-lg-flex floating"
        />
      </div>
      <div className=" col-12 col-lg-6 presentacion d-flex flex-column align-items-center mt-4 px-1">
        <h2>¡Hola!</h2>
        <h1>
          SOY <span className="nombre">AYELEN GARCÍA,</span>
        </h1>
        <h2 className="jr-front">FULLSTACK DEVELOPER</h2>
        <p className="pb-0 pt-2 text-more">
          Actualmente me desempeño como Desarrolladora{" "}
          <span>Frontend y FullStack</span> con casi 3 años de experiencia. Me
          encanta el mundo del gaming y trabajo con esa inspiración en la
          mayoría de mis proyectos personales.
          <br />
          Cuando me enfrento a proyectos desafiantes suelo ser exhaustiva e
          intuitiva para llegar a mis objetivos. Me motiva poner mis
          conocimientos a prueba y tener la oportunidad de crecer y{" "}
          <span>adquirir mayor experiencia en el mundo IT.</span>
        </p>
      </div>
      <div className="col-lg-3 m-0 p-0"></div>
      <div
        className="cont-btn col-12 d-flex justify-content-center px-0"
        onClick={() => changeStatus(!statusModal)}
      >
        <button className="col-5 col-lg-2 btn-cv p-1">
          <i className="bi bi-download pe-2"></i> Descargar CV
        </button>
      </div>
      <Modal estado={statusModal} cambiarEstado={changeStatus} />
    </About>
  );
};

export default about;
