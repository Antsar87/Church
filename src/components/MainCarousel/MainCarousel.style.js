import styled from 'styled-components';

export const Box = styled.div`

.slick-dots {
  width: 20rem;
  display: flex;

  li {
    margin: 0 0;
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
  top: 389px;
  right: 600px;
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
  top: 389px;
  left: 20px;
  z-index: 10;

  &::before {
    display: none;
  }
`;
