import styled from "styled-components";

export const Skills = styled.div`
  background-color: rgba(142, 68, 173, 0.13);
  color: ${({ theme }) => theme.text};
  transition: 0.5s all ease-in;

  .cont-skill {
    background-color: #9b59b6;
    border-radius: 8px;
  }

  .cont-skill:hover {
    transform: translateY(-15px);
    box-shadow: ${({ theme }) => theme.btnShadow};
    transition: 0.5s;
  }

  .name-skill {
    color: #f9f9f9;
  }
`;