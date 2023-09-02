import styled from "styled-components";

export const Header = styled.header`
  background: rgba(142, 68, 173, 0.13);

  .navbar {
    background-color: #bb5268;
    color: #f9f9f9;
  }

  .divider {
    height: 0.5px;
    background-color: #f9f9f9;
  }

  ul,
  .menu,
  .menu-2 {
    text-decoration: none;
    list-style: none;
    color: #f9f9f9;
  }

  .menu {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #bb5268;
  }

  .menu-2 {
    padding: 12px;
    font-size: 0.8rem;
  }

  .menu:hover {
    border: 1px solid #f9f9f9;
  }

  .menu:hover,
  .menu-2:hover {
    background: #c66c7f;
    transition: 0.5s;
  }

  .ubica,
  .bi-geo-alt-fill {
    color: #f9f9f9;
    font-size: 0.6rem;
  }
`;
