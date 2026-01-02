import { Modal } from "./Modal.styled";

const modal = ({ estado, cambiarEstado }) => {
  return (
    <div>
      {estado && (
        <Modal className="modal row container-fluid d-flex justify-content-center m-0">
          <div className="col-10 col-sm-6 col-lg-5 col-xl-4 cont-modal ">
            <span
              className="close d-flex justify-content-between p-2 pb-1 px-1"
              onClick={() => cambiarEstado(false)}
            >
              Curriculum Vitae<i className="bi bi-x-square-fill"></i>
            </span>
            <div className="d-flex flex-column justify-content-center align-items-start px-1 p-3 pt-4">
              <a
                href="/assets/Cv-Ayelen.pdf"
                download
                className="p-2 cv"
              >
                <h6 className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-pdf-fill pe-2"></i>CV Ayelen 2024
                </h6>
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default modal;
