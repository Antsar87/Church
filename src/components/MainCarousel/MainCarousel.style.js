import styled from 'styled-components';

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

      &::before {
        display: none;
      }
    }

    .slick-active {
      opacity: 1 !important;
    }
  }
`;

export const BoxImg = styled.div`
  height: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const BoxText = styled.div`
  .type {
    font-size: 1.3rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  .content {
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

export const BoxProfile = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BoxFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    margin-bottom: 0;
    font-size: 1.3rem;
  }
`;

export const NextArrow = styled.div`
  bottom: 0;
  top: 110%;
  left: 130px;
  z-index: 10;

  .slick-next {
    bottom: 0;
    background: red;
  }

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
