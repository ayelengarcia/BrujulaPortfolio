import styled from "styled-components";

export const Modal = styled.div`
  background-color: #02020294;

  .cont-modal {
    position: relative;
    top: 25vh;
    color: #f9f9f9;
    background-color: #8831aae8;
    border: 1px solid #dec5e7a8;
    border-radius: 8px;
    height: min-content;
  }

  .close {
    border-bottom: 1px solid #dec5e7a8;
  }

  .bi-x-square-fill {
    cursor: pointer;
  }

  .bi-x-square-fill:hover {
    color: #380431;
  }

  .cv {
    text-decoration: none;
    color: #f9f9f9;
  }

  .cv:hover {
    color:rgb(15, 23, 169);
    transition: 0.5s;
  }

  .bi-file-earmark-pdf-fill {
    color: #c00505;
    font-size: 1.8rem;
  }
`;
