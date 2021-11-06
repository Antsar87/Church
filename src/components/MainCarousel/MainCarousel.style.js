import styled, { css } from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 100%;

  .slick-slider {
    display: grid;
    height: 100%;
    row-gap: 1.5rem;
    grid-template-areas:
      'head head head head'
      'prev cente next .';

    .slick-list {
      grid-area: head;
    }
  }

  .slick-dots {
    text-align: initial;
    display: inline;
    position: initial;
    grid-area: cente;

    li {
      margin: 0 0;
      opacity: 0.5;
    }

    button {
      background: ${(props) => props.theme.blueDark};
      border-radius: 50%;
      width: 1rem;
      height: 1rem;

      ${(props) =>
        props.type === 'green' &&
        css`
          background: ${(props) => props.theme.greenDark};
        `}

      ${(props) =>
        props.type === 'yellow' &&
        css`
          background: ${(props) => props.theme.white};
        `}

      ${(props) =>
        props.type === 'blueLight' &&
        css`
          background: ${(props) => props.theme.blueLight};
        `}

      &::before {
        display: none;
      }
    }

    .slick-active {
      opacity: 1 !important;
    }
  }
`;

export const NextArrow = styled.div`
  position: initial;
  z-index: 10;
  display: inline !important;
  grid-area: next;
  transform: initial;

  &::before {
    display: none;
  }
`;

export const PrevArrow = styled.div`
  z-index: 10;
  position: initial;
  display: inline !important;
  grid-area: prev;
  transform: initial;
  &::before {
    display: none;
  }
`;
