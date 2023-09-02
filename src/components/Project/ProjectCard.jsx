const ProjectCard = ({image, title, subtitle, description, repo, web}) => {
  return (
    <div className="col-12 col-lg-5 project-container d-flex flex-column align-items-center py-5">
      <img src={image} alt="Vista Fine Games" className="w-75 floating pb-3" />
      <div className="col-9 d-flex flex-column">
        <h2 className="title-project title">{title}</h2>
        <p className="subtitulo">{subtitle}</p>
        <p>{description}</p>
      </div>
      <div className="d-flex gap-3 gap-sm-5">
        <a href={repo} target="_blank">
          <button className="btn-git p-2"><i className="bi bi-github pe-2"></i>Repositorio</button>
        </a>
        <a href={web} target="_blank">
          <button className="btn-cv p-2"><i className="bi bi-globe2 pe-2"></i>SitioWeb</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
