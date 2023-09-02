import styled from "styled-components";

export const Certificate = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition: 0.5s all ease-in;

  .box {
    position: relative;
    border: 2px solid #9b59b6;
    border-radius: 10px;
    animation: flicker-1 3s linear infinite both;
  }

  .box:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }

  .curso {
    font-size: 1.4rem !important;
  }

  .logo-coder {
    width: 4rem;
  }

  .academ {
    background-color: #9b59b6;
    border-radius: 5px;
    color: #f9f9f9;
  }

  .fecha {
    border: 1px solid #9b59b6;
    border-radius: 5px;
  }

  .texto {
    font-size: 1rem;
    margin: 0;
  }

  .btn-disabled:hover {
    background-color: #9b59b6;
    box-shadow: none !important;
    transform: none;
  }
`;
