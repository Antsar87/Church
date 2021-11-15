import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Carousel = styled.div`
  flex: 2;
  .carousel {
    height: 60%;

    @media ${device.tablet} {
      height: 100%;
    }

    &-item {
      height: 100%;

      img {
        height: 100%;
        object-fit: fill;
      }
    }

    &-inner {
      height: 100%;
    }

    .circle {
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
    }

    &-indicators {
      margin-bottom: 0;
      .active {
        background-color: ${(props) => props.theme.yellow};
        height: 1rem;
      }
      [data-bs-target] {
        opacity: 1;
        width: 1rem;
        height: 1rem;
      }
    }

    &-caption {
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 3rem 3rem 3rem;
      height: 12rem;
      text-align: justify;

      .back {
        position: absolute;
        top: -1px;
        left: 0;
        background: black;
        opacity: 0.5;
        height: 100%;
        width: 100%;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      p {
        width: 80%;
        position: absolute;
        top: 0;
        left: 1rem;
        right: 1rem;
        color: white;
        opacity: 1 !important;
        font-size: 3rem;
        line-height: 4rem;
      }
    }

    &-control-prev,
    &-control-next {
      width: 20%;

      @media ${device.tablet} {
        width: 10%;
      }
    }
  }
`;

export const Box = styled.div`
  background: white;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .ArrowLeft {
    padding-right: 10px;
  }

  .ArrowRight {
    padding-left: 10px;
  }
`;
