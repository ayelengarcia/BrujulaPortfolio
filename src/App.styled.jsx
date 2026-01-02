import styled from "styled-components";

export const StyledApp = styled.div`
  background: ${({ theme }) => theme.bg};
  transition: 0.5s all ease-in;

  .title {
    font-family: "Nunito", sans-serif;
    font-weight: 800 !important;
    line-height: 150% !important;
    font-size: 1.6rem !important;
  }

  .btn-cv {
    position: relative;
    background-color: #9b59b6;
    border: 1px solid rgba(0, 0, 0, 0.692);
    color: #f9f9f9;
    border-radius: 8px;
    z-index: 2;
    font-size: 0.9rem;
    top: 20px;
  }

  .btn-cv:hover {
    background-color: #ce87ec;
    box-shadow: ${({ theme }) => theme.btnShadow};
    transform: translateY(-5px);
    transition: 1s;
  }

  .btn-git {
    background-color: #f9f9f9;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.74);
    border-radius: 8px;
    z-index: 2;
    position: relative;
    top: 20px;
    font-size: 0.9rem;
  }

  .btn-git:hover {
    box-shadow: ${({ theme }) => theme.btnShadow};
    transform: translateY(-5px);
    transition: 0.5s;
  }

  .floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
    z-index: 2;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
