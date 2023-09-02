import styled from "styled-components";

export const Title = styled.div`
  background-image: url(/assets/fondo.png);
  background-size: cover;
  max-height: 100%;

  .presentacion {
    color: black;
  }

  h1 {
    font-family: "Lavishly Yours", cursive;
    line-height: 150% !important;
    font-size: 5rem !important;
  }

  @media (max-width: 769px) {

    background-image: url(/assets/FondoMobile.jpg);

    h1 {
      line-height: 150% !important;
      font-size: 3rem !important;
    }
  }
`;
