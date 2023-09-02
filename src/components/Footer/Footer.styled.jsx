import styled from "styled-components";

export const Footer = styled.div`
  background-image: url(/assets/Gracias.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  color: black;

  .gracias {
    font-family: "Lavishly Yours", cursive;
    line-height: 150% !important;
    font-size: 5rem !important;
    width: 14ch;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.03em solid #ad8328;
    animation: escribiendo 5s steps(35) infinite alternate,
      blink 1s steps(1) infinite;
  }

  .dev {
    background-color: #bb5268;
    color: white;
  }

  .dev-text, .bi-instagram {
    font-size: 0.8rem;
  }

  a{
    text-decoration: none;
    color: white;
    cursor: pointer;
    padding: 2px 3px;

  }

  a:hover{
    background-color: #B46374;
    border-radius: 3px;
    transition: .5s;
  }


  @media (max-width: 769px) {

    .corazon{
      width: 70px;
    }
    
    .fin{
      font-size: 1rem !important;
    }
    
    .gracias {
      font-size: 2.5rem !important;
    }

    .dev-text {
      font-size: 0.7rem;
    }
  }
`;
