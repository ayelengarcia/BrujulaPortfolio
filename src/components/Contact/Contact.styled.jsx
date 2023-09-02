import styled from "styled-components";

export const Contact = styled.div`
  background-color: rgba(142, 68, 173, 0.13);
  color: ${({ theme }) => theme.text};

  .bi-arrow-up-circle-fill {
    position: relative;
    font-size: 3rem;
    top: -150px;
    float: right;
    right: 20px;
    color: #9b59b6;
  }

  .bi-arrow-up-circle-fill:hover {
    color: #ce87ec;
    transition: 1s;
  }

  .a {
    color: ${({ theme }) => theme.text};
  }

  .a:hover {
    color: #b578ce;
    transition: 0.5s;
  }

  .bi-linkedin,
  .bi-whatsapp,
  .bi-envelope-at-fill {
    font-size: 1.8rem;
    color: #9b59b6;
  }
`;