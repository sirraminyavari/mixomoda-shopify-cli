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
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;

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

export const Box = styled.div`
  display: flex;
  width: 100%;
  transition: all 1s, max-height 1s, min-height 1s, height 1s, min-width 0.5s;
  position: relative;
`;

export const GoBack = styled.div`
    position: absolute;
    right: 0;
    top: -2rem;
    color: rgb(21, 101, 192);
    cursor: pointer;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    :hover {
        color: rgb(21, 101, 255);
    }
`;
