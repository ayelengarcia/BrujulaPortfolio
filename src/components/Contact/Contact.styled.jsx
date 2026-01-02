import styled from "styled-components";

export const Contact = styled.div`
  background-color: rgba(142, 68, 173, 0.13);
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  position: relative;

  .bi-arrow-up-circle-fill {
    font-size: 3rem;
    float: right;
    color: #9b59b6;
  }

  .bi-arrow-up-circle-fill:hover {
    color: #ce87ec;
    transition: 1s;
  }

  .send_top {
    position: absolute;
    top: -40px;
    right: 5px;
  }

  .send_top:hover {
    color: #b578ce;
    transition: 0.5s;
  }

  .bi-linkedin,
  .bi-whatsapp,
  .bi-envelope-at-fill {
    font-size: 0.8rem;
    color: #9b59b6;
    display: flex;
    align-items: center;
  }

  p,
  a {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  .msg_error {
    color: red;
  }

  input,
  textarea {
    font-size: 0.8rem;
    background: rgb(232, 240, 254);
    border: solid 1px #9b59b6;
    border-radius: 3px;
    text-indent: 10px;
    padding: 3px 0px;
    color: black;
    min-width: 200px;
  }

  textarea {
    height: 70px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9b59b6;
  }

  input:focus-visible,
  textarea:focus-visible {
    outline: none;
    border: 1px solid #f43fff9e;
  }

  .button {
    background-color: #9b59b6;
    border: 1px solid rgba(0, 0, 0, 0.692);
    color: #f9f9f9;
    border-radius: 3px;
    z-index: 2;
    font-size: 0.8rem;
    padding: 3px 0px;
  }

  .button:hover {
    background-color: #ce87ec;
    transition: 1s;
  }

  .info_style {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .info_style:hover {
    transform: scale(1.05);
  }
`;
