import styled from "styled-components";

export const Asistencia = styled.div`
  background-color: #f0e0e372;
  color: black;

  .div-projects {
    overflow: hidden;
  }

  .texto {
    font-size: 1.1rem;
    margin: 0;
    letter-spacing: 1px;
  }

  .icon {
    width: 4rem;
  }

  a {
    text-decoration: none;
  }

  .btn {
    border-radius: 50px;
    background: #bb5268;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2.5px;
    filter: drop-shadow(-5px 5px 1px rgba(0, 0, 0, 0.25));
  }

  .btn:hover {
    background: #c66c7f;
  }

  @media (max-width: 769px) {
    .texto {
      font-size: .9rem;
    }

    .icon {
      width: 3.5rem;
    }

    .btn {
      font-size: .8rem;
      letter-spacing: 2px;
      filter: drop-shadow(-5px 5px 1px rgba(0, 0, 0, 0.25));
    }
  
  }
`;
