import styled from "styled-components";

export const Projects = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition: 0.5s all ease-in;

  .div-projects {
    overflow: hidden;
  }

  .project-container {
    position: relative;
    background-color: rgba(75, 45, 82, 0.1);
    color: #f9f9f9;
    border-radius: 5px;
    overflow: hidden;
    flex-wrap: wrap;
    padding: 25px;
    min-height: 825px;
  }

  .project-container::before {
    content: "";
    position: absolute;
    top: -100px;
    width: 60%;
    height: 160%;
    background: linear-gradient(270deg, #c784fe 0%, #fd85e3 104.02%);
    animation: rotate 4s linear infinite;
    overflow: hidden;
  }

  .project-container::after {
    content: "";
    position: absolute;
    background: #9b59b6;
    border-radius: 5px;
    inset: 3px;
  }

  .project-container:hover {
    animation: blink-2 0.9s both;
    transition: 1s;
  }

  .title-project {
    font-family: "Nunito", sans-serif;
    font-weight: 800 !important;
    line-height: 150% !important;
    z-index: 2;
    font-size: 1.3rem;
    text-shadow: 2px 2px black;
  }

  .subtitulo {
    z-index: 2;
    color: #d9d9d9;
    font-size: 0.9rem;
  }

  p {
    z-index: 2;
  }

  img {
    z-index: 9999;
    max-width: 100%;
    height: auto;
  }

  .text {
    font-size: 0.8rem;
  }

  .text-more {
    text-align: justify;
  }

  .carousel-control-next {
    right: -10px;
    background: #00000021;
  }

  .carousel-control-prev {
    left: -10px;
    background: #00000021;
  }

  @media (min-width: 800px) {
    .project-container {
      width: 100%;
      padding: 30px 50px;
      min-height: 500px;
    }
  }

  @media (min-width: 1200px) {
    .project-container {
      flex-wrap: nowrap;
    }
  }
`;
