import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Box = styled.div`
  position: relative;
  .Back {
    height: 10rem;
    width: 100%;

    &--img {
      z-index: -1;
      position: absolute;
      height: 20rem;
      width: 100%;
      background: black;
    }
  }

  .Box {
    overflow: hidden;
    max-width: 1200px;
    margin: 0 auto;

    &__Grid {
      display: grid;

      @media ${device.mobileM} {
        column-gap: 2rem;
        row-gap: 1rem;
        padding: 0 1rem;
      }
      grid-template-areas:
        'main main main '
        'main main main  '
        'main main main '
        ' . Annonce .'
        '. Article .'
        '. theme .'
        'social social social'
        'comment comment comment';

      @media ${device.laptop} {
        grid-template-areas:
          'main main main . '
          'main main main . '
          'main main main Annonce '
          'main main main Article '
          'main main main theme'
          'social . . .'
          'comment comment comment .';
      }
    }

    &__mainBox {
      grid-area: main;
      border-radius: 10px;
      width: 100%;
      padding: 3rem;
      background: ${(props) => props.theme.white};

      &--title {
        font-size: 2.3rem;
        font-weight: 700;
      }

      &--box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        &__time {
          display: flex;
          align-items: center;
          gap: 1rem;
          p {
            margin: 0;
          }
        }

        &__text {
          color: ${(props) => props.theme.blueDark};
          font-size: 1.5rem;
        }
      }
      &--photo {
        width: 100%;
      }

      &--content {
        font-weight: 600;
        font-size: 2rem;
        text-align: justify;
      }
    }

    &__SocialGrid {
      grid-area: social;
    }

    &__Social {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        height: 3rem;
      }

      p {
        margin: 0;
      }
    }

    &__text {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${(props) => props.theme.blueDark};
    }

    &__Comment {
      grid-area: comment;

      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      &--flex {
        display: flex;
        align-items: center;
        gap: 2rem;

        p {
          margin: 0;
        }
      }

      &--title {
        font-size: 3rem;
        font-weight: 900;
        color: ${(props) => props.theme.blueDark};
      }

      &--area {
        width: 100%;
        height: 20rem;
        padding: 2rem;
        font-size: 2rem;
        border-radius: 10px;
        box-shadow: 0.25rem 0.25rem 1rem grey;
        border: none;
        resize: none;

        &:focus {
          outline: none;
        }
      }

      &--text {
        font-size: 1.5rem;
        font-weight: 500;
      }

      &--Box {
        background: white;
        padding: 1rem;
        border-radius: 10px;

        &__img {
          object-fit: cover;
        }

        &__name {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${(props) => props.theme.blueDark};
        }

        &__time {
          font-size: 1.6rem;
        }

        &__Content {
          display: flex;
          justify-content: center;
          text-align: justify;
          font-size: 1.5rem;

          p {
            width: 80%;
          }
        }
      }
    }
    .boxImg {
      flex: 1;

      @media ${device.laptop} {
        height: 12rem !important;
      }
    }

    .boxContent {
      flex: 1;
    }

    &__Annonce {
      grid-area: Annonce;
      text-align: center;

      @media ${device.laptop} {
        margin-top: 10rem;
      }

      @media ${device.laptop} {
        text-align: start;
      }

      &--title {
        font-size: 2rem;
        color: ${(props) => props.theme.blueDark};
      }

      img {
        width: 40rem;
        height: 40rem;

        @media ${device.laptop} {
          width: 100%;
        }
      }
    }

    &__Article {
      grid-area: Article;
    }

    &__Theme {
      grid-area: theme;
    }
  }
`;
