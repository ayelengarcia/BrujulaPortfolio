import styled from "styled-components";

export const Certificate = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  transition: 0.5s all ease-in;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #9b59b6;
    border-radius: 10px;
    min-height: 305px;
    min-width: 320px;
  }

  .curso {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    line-height: 150%;
    font-size: 1.1rem;
  }

  .logo-coder {
    width: 3.5rem;
  }

  .academ {
    background-color: #9b59b6;
    border-radius: 5px;
    color: #f9f9f9;
    font-size: 0.8rem;
  }

  .fecha {
    border: 1px solid #9b59b6;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  .texto {
    font-size: 0.9rem;
    margin: 0;
    padding: 15px 15px 0px 15px;
  }

  .btn-disabled:hover {
    background-color: #9b59b6;
    box-shadow: none !important;
    transform: none;
  }

  .slick-arrow {
    background-color: #9b59b69e;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    z-index: 1;
    transform: translate(0, -50%);
    cursor: pointer;
    color: white;
    font-size: 40px;
  }

  .slick-arrow:hover {
    background-color: #9b59b6;
    transition: 0.5s;
  }

  .arrow-prev {
    left: -5px;
  }

  .arrow-next {
    right: -5px;
  }
`;
