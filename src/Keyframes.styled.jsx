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
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@-webkit-keyframes flicker-1 {
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
  }
}
@keyframes flicker-1 {
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
  }
}

@-webkit-keyframes blink-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
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
