import React from "react";
import { Certificate } from "./Certificate.styled";
import Certificados from "../../../certificados.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const certificate = () => {
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
    <Certificate className="container-fluid py-5">
      <Slider
        {...settings}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        className="d-flex gap-3"
      >
        {Certificados.map((cert, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center p-3"
          >
            <div className="box">
              <img
                src="/assets/logocoder.png"
                alt="Logo CoderHouse"
                className="logo-coder pt-2"
              />
              <h4 className="curso">{cert.title}</h4>
              <div className="d-flex gap-3">
                <div className="academ p-1 px-2">Coder House</div>
                <div className="fecha p-1 px-2">{cert.date}</div>
              </div>
              <p className="texto"> {cert.description} </p>
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-cv p-2 py-1 mb-2">
                  <i className="bi bi-file-earmark-zip pe-1"></i> {cert.btn}
                </button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </Certificate>
  );
};

export default certificate;
