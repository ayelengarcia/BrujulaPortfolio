import styled from "styled-components";

export const Skills = styled.div`
  background-color: rgba(142, 68, 173, 0.13);
  color: ${({ theme }) => theme.text};
  transition: 0.5s all ease-in;

  .cont-skill {
    background-color: #9b59b6;
    border-radius: 8px;
    width: 100px;
    height: 100px;
  }

  .cont-skill:hover {
    transform: scale(1.05);
    transition: transform 1s;
    cursor: url("/assets/cursor.png"), auto;
  }

  .name-skill {
    color: #f9f9f9;
    font-size: 0.8rem;
  }

  .text-more {
    text-align: justify;
  }

  .slick-arrow {
    background-color: #fefdfda1;
    color: #9b59b6;
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
    font-size: 40px;
  }

  .slick-arrow:hover {
    background-color: white;
    color: #9b59b6;
  }

  .arrow-prev {
    left: -5px;
  }

  .arrow-next {
    right: -5px;
  }

  p {
    font-size: 0.95rem;
  }
`;
