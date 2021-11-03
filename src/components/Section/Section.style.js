import styled from 'styled-components';

export const Box = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 20.5rem);
  gap: 10px;
  border-radius: 10px;
  margin-top: 30px;

  .carousel {
    grid-column: 1 / 3;
    grid-row: 1 / -1;

    .circle {
      border-radius: 50%;
      width: 10px;
      height: 10px;
    }

    &-indicators {
      margin-bottom: 0;
      .active {
        background-color: ${(props) => props.theme.yellow};
        height: 10px;
      }
      [data-bs-target] {
        opacity: 1;
        width: 10px;
        height: 10px;
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
      width: 10%;
    }
  }
`;
