import styled from "styled-components";

export const Ubicacion = styled.div`
  background-image: url(/assets/fondo2.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  color: black;
  position: relative;

  .contador {
    background-color: #bb5268;
    border-radius: 20px;
    color: white;
    box-shadow: -4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    width: 60px;
    height: 45px;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;
    color: black;
    margin: 0px;
    letter-spacing: 2px;
  }

  .ubica{
    position: relative;
  }

  .bi-whatsapp {
    color: #bb5268;
  }

  .text {
    font-size: 0.8rem;
  }

  .ubica {
    color: black;
  }

  .text-2 {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  .text-3 {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  .text-4 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .bi-clipboard{
    color: #eeadb9;
    padding: 2px;
  }

  .wpp {
    font-size: 1.1rem;
    letter-spacing: 2px;
    padding: 2px 5px;
  }

  .wpp:hover{
    cursor: pointer;
    background-color: #f0e0e372;
    border-radius: 5px;
    transition: .5s;
  }

  .wpp:hover > .bi-clipboard {
    color: #bb5268;
    transition: .5s;
  }

  .copiado{
    font-size: .9rem;
    position: absolute;
    background-color: black;
    color: white;
    padding: 3px;
    border-radius: 3px;
    bottom: 10%;
    right: 0;
  }

  a {
    text-decoration: none;
  }

  .btn {
    border-radius: 50px;
    background: #bb5268;
    color: #f9f9f9;
  }

  .btn:hover {
    background: #c66c7f;
  }

  @media (max-width: 769px) {
    background-image: url(/assets/fondo2-mobile.jpg);
    background-size: cover;

    .contador{
      border-radius: 15px;
    }

    .px-5 {
      padding-right: 2rem!important;
      padding-left: 2rem!important;
  }

    .cont {
      width: 45px;
      height: 35px;
      border-radius: 5px;
      font-size: 1.2rem;
      letter-spacing: 2px;
      border-radius: 3px;
    }

    .text {
      font-size: 0.7rem;
    }
  
    .text-2 {
      font-size: .95rem;
      letter-spacing: 1px;
    }
  
    .text-3 {
      font-size: 1rem;
    }
  
    .text-4 {
      font-size: .9rem;
    }
    
  .wpp {
    font-size: .9rem;
  }

  .copiado{
    font-size: .7rem;
  }

  .btn{
    font-size: .9rem;
  }

  .bi-geo-alt-fill{
    font-size: .9rem;
  }

  }
`;
