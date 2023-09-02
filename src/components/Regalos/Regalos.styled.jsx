import styled from "styled-components";

export const Regalos = styled.div`
  background: #fffff;

  .text {
    color: black;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p {
    margin: 2px;
  }

  .sobre {
    width: 5rem;
  }

  .bi-arrow-up-circle-fill {
    position: relative;
    font-size: 3rem;
    bottom: -40px;
    float: right;
    right: 20px;
    color: #bb5268;
  }

  .bi-arrow-up-circle-fill:hover {
    color: #c66c7f;
    transition: 1s;
  }

  @media (max-width: 769px) {
    .text {
      font-size: .9rem;
      letter-spacing: .8px;
    }

    .sobre {
      width: 4rem;
    }

    .bi-arrow-up-circle-fill {
      font-size: 2.5rem;
      bottom: -30px;
    }
  }
`;
