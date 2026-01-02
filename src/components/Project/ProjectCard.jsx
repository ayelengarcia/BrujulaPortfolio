const ProjectCard = ({ image, title, subtitle, description, repo, web }) => {
  return (
    <div className="project-container d-flex align-items-center justify-content-center gap-4">
      <img src={image} alt="Imagen sitio" />
      <div className="d-flex flex-column">
        <h2 className="title-project">{title}</h2>
        <p className="subtitulo">{subtitle}</p>
        <p className="text text-more">{description}</p>
        <div className="d-flex flex-wrap gap-2 pb-5">
          <a href={repo} target="_blank">
            <button className="btn-git p-2">
              <i className="bi bi-github pe-2"></i>Repositorio
            </button>
          </a>
          <a href={web} target="_blank">
            <button className="btn-cv p-2">
              <i className="bi bi-globe2 pe-2"></i>SitioWeb
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
