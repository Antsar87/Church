import styled, { css } from 'styled-components';
import { device } from '../../config/Responsive';

export const MainBox = styled.div`
  .boxContent {
    .type {
      color: ${(props) => props.theme.pinkDark};
      font-size: 1.3rem;
      text-transform: capitalize;
    }

    h2 {
      font-weight: 700;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    p {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .boxFlex {
    display: flex;
    gap: 1rem;    

    &__child {
      display: flex;
      align-items: center;

      h3 {
        font-size: 1.2rem;
        margin: 0 0;
      }
    }
  }

  ${(props) =>
    props.box === 'main' &&
    css`
      .boxImg {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover left;
        }
      }

      .boxContent {
        .type {
          margin: 1rem 0;
        }
      }

      .boxFlex {
        width: 30rem;
        &__child {
          gap: 1.3rem;

          h3 {
            font-size: 1.2rem;
            margin: 0 0;
          }
        }
      }
    `}

  ${(props) =>
    props.box === 'secondary' &&
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      gap: 1rem;

      @media ${device.mobileL} {
        flex-direction: row;
        align-items: center;
      }

      .boxImg {
        flex: 1;
        img {
          object-fit: cover top;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }

      .boxFlex__child {
        gap: 0.5rem;
      }

      .boxContent {
        flex: 1;
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }

      .boxContent {
        h2 {
          font-size: 1.2rem;

          @media ${device.mobileM}{
            font-size: 2rem;
          }
        }
      }
    `}
`;
