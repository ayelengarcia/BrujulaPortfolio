import styled from "styled-components";

export const Animations = styled.div`
  @-webkit-keyframes color-change-2x {
    0% {
      background-color: #04eeff;
    }
    100% {
      background-color: #b22cff;
    }
  }
  @keyframes color-change-2x {
    0% {
      background-color: #00eeff;
    }
    100% {
      background-color: #b22cff;
    }
  }

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @keyframes escribiendo {
    from {
      width: 0;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
