import { Header } from "./Header.styled";
import { Link } from "react-router-dom";

const header = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  let icono =
    props.theme === "light" ? (
      <i className="bi bi-moon-stars-fill"></i>
    ) : (
      <i class="bi bi-cloud-sun-fill"></i>
    );

  return (
    <Header id="header" className="py-1">
      <div className="navbar m-2 mx-3">
        <div className="col-12 d-flex justify-content-between align-items-center px-3">
          <div className="col-1">
            <img src="/assets/logoPortaf.webp" alt="Logo" className="logo" />
          </div>
          <ul className="col-8 d-none d-sm-flex justify-content-center m-0 p-0 pt-1 ps-4 gap-md-5">
            <li>
              <a className="menu d-flex" href="#about">
                Sobre mi
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="#projects">
                Proyectos
              </a>
            </li>
          </ul>
          <ul className="col-2 d-flex gap-1 justify-content-end align-items-end mb-0">
            <li>
              <a className="contact" href="#contact">
                <i className="bi bi-chat-left-dots"></i>
              </a>
            </li>
            <li onClick={() => changeTheme()}>
              <a className="vista" href="#">
                {icono}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 divider my-2"></div>
        <ul className="col-12 d-sm-none d-flex justify-content-center m-0 p-0">
          <li>
            <a className="menu-2" href="#about">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="menu-2" href="#skills">
              Habilidades
            </a>
          </li>
          <li>
            <a className="menu-2" href="#projects">
              Proyectos
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
