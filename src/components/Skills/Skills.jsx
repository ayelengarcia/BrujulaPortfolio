import { useState } from "react";
import Habilidades from "../../../Habilidades.json";
import SkillCard from "./SkillCard";
import { Skills } from "./Skills.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const skills = () => {
  const [skills, setProductos] = useState(Habilidades);

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="slick-arrow arrow-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="slick-arrow arrow-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  return (
    <Skills id="skills" className="container-fluid m-0 py-3">
      <h2 className="p-3 d-flex justify-content-center title">
        MIS HABILIDADES
      </h2>

      <div>
        <Slider
          {...settings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          className="d-flex justify-content-center align-items-center p-0"
        >
          {skills.map((card) => {
            return (
              <SkillCard
                key={card.id}
                img={card.img}
                alt={card.alt}
                clase={card.clase}
                skill={card.skill}
              />
            );
          })}
        </Slider>
      </div>

      <div className="row d-flex justify-content-center align-items-center pt-3 gap-1">
        <p className="p-5 pb-0">
          Me gusta explorar y aprender nuevas tecnologías y habilidades. He
          aprendido y aplicado de manera autónoma a utilizar tecnologías como
          MSQL con (DB maria), GoogleCloud, Docker, NextJs y Diferentes APIrest
          en proyectos productivos. Próximamente planeo profundizar en Nextjs y
          React Native. Siempre estoy actualizando y poniendo en práctica mis
          conocimientos en mi repositorio de GitHub. ¡Te invito a visitarlo!
        </p>
        <a
          href="https://github.com/ayelengarcia/"
          target="_blank"
          className="text-decoration-none d-flex justify-content-center col-10 col-lg-3 col-xl-2 pt-0"
        >
          <button className=" btn-git p-1 px-2 mb-3">
            <i className="bi bi-github pe-2"></i>Github-Profile
          </button>
        </a>
      </div>
    </Skills>
  );
};

export default skills;
