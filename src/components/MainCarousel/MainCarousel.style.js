import styled, { css } from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  height: 100%;

  .slick-dots {
    width: 15rem;
    height: 1.8rem;
    top: 107%;

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
  bottom: 0;
  top: 110%;
  left: 130px;
  z-index: 10;

  &::before {
    display: none;
  }
`;

export const PrevArrow = styled.div`
  bottom: 0;
  left: -2px;
  top: 110%;

  z-index: 10;

  &::before {
    display: none;
  }
`;
