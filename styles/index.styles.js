import styled, { keyframes } from 'styled-components';

const toRight = keyframes`
  from {
    left: 0rem;
  }

  to {
    left:100%;
  }
`;

const fromLeft = keyframes`
  from {
    left: -100%;
  }

  to {
   left:0rem;
  }
`;

export const Wrapper = styled.div`
  div.transition-group {
    position: relative;
  }

  .fade-enter {
    opacity: 0;
    animation: ${ fromLeft } 1s;
    position: absolute;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    position: absolute;
    transition: opacity 1s, min-height 1s;
  }

  .fade-exit {
    opacity: 1;
    animation: ${ toRight } 1s;
    position: absolute;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    position: absolute;
    transition: opacity 1s, min-height 1s;
  }
`;
