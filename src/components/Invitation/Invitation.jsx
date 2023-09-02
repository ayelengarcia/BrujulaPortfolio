import { Invitation } from "./Invitation.styled";

const certificate = () => {
  return (
    <Invitation
      id="invitacion"
      className="row container-fluid d-flex justify-content-center py-5 px-1 mx-0 gap-3"
    >
      <div className="box d-flex flex-column align-items-center gap-1 p-2">
        <img src="/assets/coups.png" alt="Logo" className="logo" />

        <p className="texto mt-3">Tenemos el honor de invitarlos</p>
        <p className="texto mb-3">a celebrar nuestra boda el día</p>

        <div className="d-flex gap-3">
          <div className="mes p-1 px-2">NOVIEMBRE</div>
          <div className="dia mx-2">26</div>
          <div className="año p-1 px-2">2023</div>
        </div>
        <div className="hora d-flex justify-content-end align-items-end">
          <p>
            <span className="hidden">La celebración será a las </span>
            19:00hs
          </p>
        </div>
      </div>
    </Invitation>
  );
};

export default certificate;
