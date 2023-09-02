import { Regalos } from "./Regalos.styled";

const regalos = () => {
  return (
    <Regalos id="regalos" className="skills ">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center py-5">
        <p className="text">Tu presencia es nuestro mejor regalo.</p>
        <p className="text">Pero si deseas obsequiarnos algo,</p>
        <p className="text">puedes hacerlo de la siguiente forma:</p>
      </div>

      <div className="col-12 d-flex flex-column justify-content-center align-items-center">
        <img className="sobre" src="/assets/sobre.png" alt="sobre" />
      </div>

      <div className="col-12 d-flex flex-column justify-content-center align-items-center pt-5">
        <p className="text">Durante la recepción habrá una urna</p>
        <p className="text">donde se podrán depositar</p>
        <p className="text">sobrecitos anónimos</p>
      </div>

      <a className="a" href="index.html#header">
        <i className="bi bi-arrow-up-circle-fill"></i>
      </a>
    </Regalos>
  );
};

export default regalos;
