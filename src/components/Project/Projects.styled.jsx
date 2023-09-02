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
  }

  .project-container::before {
    content: "";
    position: absolute;
    top: -100px;
    width: 60%;
    height: 160%;
    background: linear-gradient(#ff00c8, #8c00ff);
    animation: rotate 4s linear infinite;
    overflow: hidden;
  }

  .project-container::after {
    content: "";
    position: absolute;
    background: #9b59b6;
    border-radius: 5px;
    inset: 4px;
  }

  .project-container:hover {
    animation: blink-2 0.9s both;
    transition: 1s;
  }

  .title-project {
    z-index: 2;
    font-size: 1.7rem;
    text-shadow: 2px 2px black;
  }
  .subtitulo {
    z-index: 2;
    color: #d9d9d9;
    font-size: 1rem;
  }

  p {
    z-index: 2;
  }
`;