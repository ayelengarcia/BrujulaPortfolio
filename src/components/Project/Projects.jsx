import { useState } from "react";
import proyectos from "../../../proyectos.json";
import ProjectCard from "./ProjectCard";
import { Projects } from "./Projects.styled";

const projects = () => {
  const [productos, setProductos] = useState(proyectos);

  return (
    <Projects id="projects" className="row container-fluid m-0 py-3 pb-5">
      <h2 className="p-3 d-flex justify-content-center title">MIS PROYECTOS</h2>
      <div className="d-flex justify-content-around flex-wrap gap-3 div-projects">
        {productos.map((producto) => {
          return (
            <ProjectCard
              key={producto.id}
              image={producto.image}
              title={producto.title}
              subtitle={producto.subtitle}
              description={producto.description}
              repo={producto.repo}
              web={producto.web}
            />
          );
        })}
      </div>
    </Projects>
  );
};

export default projects;
