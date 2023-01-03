

const header = () => {
  return (
    <header id="header" className="py-1">
      <div className="navbar m-2 mx-3">
        <div className="col-12 d-flex justify-content-between align-items-center px-3">
          <div className="col-1">
            <img src="src/assets/logoPortaf.webp" alt="Logo" className="logo" />
          </div>
          <ul className="col-8 d-none d-sm-flex justify-content-center m-0 p-0 pt-1 ps-4 gap-md-5">
            <li>
              <a className="menu d-flex" href="index.html#about">
                Sobre mi
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="menu d-flex" href="index.html#projects">
                Proyectos
              </a>
            </li>
          </ul>
          <ul className="col-2 d-flex gap-1 justify-content-end align-items-end mb-0">
            <li>
              <a className="contact" href="index.html#contact">
                <i className="bi bi-chat-left-dots"></i>
              </a>
            </li>
            <li>
              <a className="vista" href="#">
                <i className="bi bi-moon-stars-fill"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 divider my-2"></div>
        <ul className="col-12 d-sm-none d-flex justify-content-center m-0 p-0">
          <li>
            <a className="menu-2" href="index.html#about">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="menu-2" href="index.html#skills">
              Habilidades
            </a>
          </li>
          <li>
            <a className="menu-2" href="index.html#projects">
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
    </header>
  );
};

export default header;
