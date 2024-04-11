import styled from "styled-components";

export const About = styled.div`
  background-image: url(/assets/sobremi.png);
  background-size: cover;
  max-height: 100%;
  animation: color-change-2x 2s linear infinite alternate both;

  .avatar-bruju-lg {
    width: 80%;
  }

  .presentacion {
    color: #f9f9f9;
  }

  h1,
  h2,
  .nombre {
    font-family: "Nunito", sans-serif;
    font-weight: 800 !important;
    line-height: 150% !important;
    font-size: 1.6rem !important;
  }

  .nombre,
  span {
    color: #ce87ec;
    font-size: 0.95rem;
  }
  p {
    font-size: 0.95rem;
  }

  .text-more {
    text-align: justify;
  }

  .jr-front {
    width: 21ch;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.15em solid #18bdec;
    animation: escribiendo 5s steps(35) infinite alternate,
      blink 1s steps(1) infinite;
  }
`;
