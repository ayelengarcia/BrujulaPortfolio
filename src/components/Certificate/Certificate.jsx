import { Certificate } from "./Certificate.styled";

const certificate = () => {
  return (
    <Certificate className="row container-fluid d-flex justify-content-around py-5 px-1 mx-0 gap-3">
      <div className="col-10 col-xl-3 box d-flex flex-column align-items-center gap-1 p-2">
        <img
          src="/assets/logocoder.png"
          alt="Logo CoderHouse"
          className="logo-coder pt-2"
        />
        <h2 className="curso title">DESARROLLO WEB</h2>
        <div className="d-flex gap-3">
          <div className="academ p-1 px-2">Coder House</div>
          <div className="fecha p-1 px-2">Jul-Oct 2022</div>
        </div>
        <p className="texto">
          Creación de sitios web con HTML y CSS. Maquetado, prácticas de
          versionado, preprocesadores, librerías, servidores y SEO.
        </p>
        <a
          href="https://www.coderhouse.com/certificados/63489fedfc92c5000eed23cf"
          target="_blank"
        >
          <button className="btn-cv p-2 py-1">
            <i className="bi bi-file-earmark-zip pe-1"></i> CERTIFICADO
          </button>
        </a>
      </div>

      <div className="col-10 col-xl-3 box d-flex flex-column align-items-center gap-1 p-2">
        <img
          src="/assets/logocoder.png"
          alt="Logo CoderHouse"
          className="logo-coder pt-2"
        />
        <h2 className="curso title">JAVA SCRIPT</h2>
        <div className="d-flex gap-3">
          <div className="academ p-1 px-2">Coder House</div>
          <div className="fecha p-1 px-2">Oct-Dic 2022</div>
        </div>
        <p className="texto">
          Creación de aplicaciones con JavaScript. Desarrollo con tecnología
          AJAX. Fetch, promises, API, librerías JS y buenas prácticas.
        </p>
        <a
          href="https://www.coderhouse.com/certificados/63a07f31f87bb4000e3ef1df"
          target="_blank"
        >
          <button className="btn-cv p-2 py-1">
            <i className="bi bi-file-earmark-zip pe-1"></i>CERTIFICADO
          </button>
        </a>
      </div>

      <div className="col-10 col-xl-3 box d-flex flex-column align-items-center gap-1 p-2">
        <img
          src="/assets/logocoder.png"
          alt="Logo CoderHouse"
          className="logo-coder pt-2"
        />
        <h2 className="curso title">REACT JS</h2>
        <div className="d-flex gap-3">
          <div className="academ p-1 px-2">Coder House</div>
          <div className="fecha p-1 px-2">Dic-Feb 2023</div>
        </div>
        <p className="texto">
          Creación de aplicaciones SPA. Programación por componentes mediante JS
          y flujos de datos. Manejo de rutas con Firebase.
        </p>
        <div className="btn-cv btn-disabled p-1 px-2">CURSANDO</div>
      </div>
    </Certificate>
  );
};

export default certificate;
