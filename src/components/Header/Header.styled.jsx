import styled from "styled-components";

export const Header = styled.header`
  background: rgba(142, 68, 173, 0.13);

  .navbar {
    background-color: #9b59b6;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #f9f9f9;
  }

  .logo {
    width: 5rem;
  }

  .contact {
    background-color: #ebe2ef;
    color: #b578ce;
  }

  .vista {
    background-color: ${({ theme }) => theme.btnTheme};
    color: #ebe2ef;
  }
  .contact:hover,
  .vista:hover {
    background-color: ${({ theme }) => theme.btnThemeHover};
    transition: 1s;
  }

  .contact,
  .vista {
    border-radius: 5px;
    padding: 12px 15px;
    text-decoration: none;
  }

  .bi {
    font-size: 1.3rem;
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
    font-size: 1.05rem;
    border: 1px solid rgba(142, 68, 173, 0.13);
  }

  .menu-2 {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid rgba(142, 68, 173, 0.13);
  }

  .menu:hover,
  .menu-2:hover {
    background: #ad7ec09a;
    transition: 0.5s;
    border: 1px solid #874c9e;
  }

  .ubica,
  .bi-geo-alt-fill {
    color: #d8b7e5;
    font-size: 0.9rem;
  }
`;
