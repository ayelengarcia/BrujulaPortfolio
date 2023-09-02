import styled from "styled-components";

export const Invitation = styled.div`
  background-color: #f0e0e372;
  color: black;

  .logo {
    width: 4rem;
  }

  .texto {
    font-size: 1.1rem;
    margin: 0;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .mes {
    font-size: 1.4rem;
    border-top: 2px solid #bb5268;
    border-bottom: 2px solid #bb5268;
  }

  .año {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 12px;
    border-top: 2px solid #bb5268;
    border-bottom: 2px solid #bb5268;
  }

  .dia {
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
  }

  .hora {
    letter-spacing: 2.2px;
  }

  .hidden {
    color: transparent;
  }

  .btn-disabled:hover {
    background-color: #9b59b6;
    box-shadow: none !important;
    transform: none;
  }

  @media (max-width: 769px) {
    .logo {
      width: 2.5rem;
    }

    .texto {
      font-size: 1rem;
      letter-spacing: 1px;
    }

    .mes {
      font-size: 1.1rem;
    }
  
    .año {
      font-size: 1.2rem;
    }
  
    .dia {
      font-size: 1.5rem;
    }

    .hora {
      letter-spacing: 1.2px;
      font-size: 1rem
    }

  }
`;
