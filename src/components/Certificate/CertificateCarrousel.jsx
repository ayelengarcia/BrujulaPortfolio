import React from "react";
import Slider from "react-slick";
import { Certificate } from "./Certificate.styled";

const CertificateCarousel = () => {
  const certificates = [
    {
      imgSrc: "/assets/logocoder.png",
      title: "DESARROLLO WEB",
      institution: "Coder House",
      date: "Jul-Oct 2022",
      description:
        "Creación de sitios web con HTML y CSS. Maquetado, prácticas de versionado, preprocesadores, librerías, servidores y SEO.",
      certificateLink:
        "https://www.coderhouse.com/certificados/63489fedfc92c5000eed23cf",
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="col-10 col-xl-3 box d-flex flex-column align-items-center gap-1 p-3"
        >
          <img
            src={cert.imgSrc}
            alt={`Logo ${cert.title}`}
            className="logo-coder pt-2"
          />
          <h2 className="curso title">{cert.title}</h2>
          <div className="d-flex gap-3">
            <div className="academ p-1 px-2">{cert.institution}</div>
            <div className="fecha p-1 px-2">{cert.date}</div>
          </div>
          <p className="texto">{cert.description}</p>
          <a href={cert.certificateLink} target="_blank">
            <button className="btn-cv p-2 py-1">
              <i className="bi bi-file-earmark-zip pe-1"></i> CERTIFICADO
            </button>
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default CertificateCarousel;
