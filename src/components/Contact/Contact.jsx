import { Contact } from "./Contact.styled";

const contact = () => {
  return (
    <Contact id="contact" className="skills ">
      <h2 className="col-12 d-flex justify-content-center py-4 title">
        CONTACTO
      </h2>
      <a className="a" href="index.html#header">
        <i className="bi bi-arrow-up-circle-fill"></i>
      </a>

      <div className="d-flex justify-content-around flex-wrap pb-4">
        <p className="col-12 col-xl-4 ps-5">
          <i className="bi bi-whatsapp pe-1"></i>+541124979403
        </p>
        <p className="col-12 col-xl-4 ps-5">
          <i className="bi bi-envelope-at-fill pe-1"></i>ayelengarcia7@gmail.com
        </p>
        <p className="col-12 col-xl-4 ps-5">
          <a
            className="a"
            href="https://www.linkedin.com/in/ayelen-garc%C3%ADa-595457232/"
            target="_blank"
          >
            <i className="bi bi-linkedin pe-1"></i>www.linkedin.com/in/ayelen-g
          </a>
        </p>
      </div>
    </Contact>
  );
};

export default contact;
