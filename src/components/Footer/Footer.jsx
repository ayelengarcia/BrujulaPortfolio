import { Footer } from "./Footer.styled";

const footer = () => {
  return (
    <Footer className="d-flex  flex-column">
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <img className="corazon" src="/assets/love.png" alt="love" />
        <p className="fin pt-3 m-0">Los mejores momentos</p>
        <p className="fin pb-3 m-0">merecen ser compartidos</p>
        <p className="gracias">¡Gracias por acompañarnos!</p>
      </div>
      <div className="dev d-flex justify-content-between align-items-center">
      <p className="dev-text d-flex justify-content-between align-items-center m-0 p-2">Desarrollo Web: <a className="dev-text d-flex align-items-center no-wrap ms-1" href="#" target="_blank"><i class="bi bi-instagram pe-1"></i> AyelenGiselle</a></p>
        <p className="dev-text  m-0 p-2">© Copyright - 2023</p>
        
      </div>
    </Footer>
  );
};

export default footer;
