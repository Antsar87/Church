import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const FormBox = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 1rem;
  background: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0.25rem 0.25rem 1rem grey;

  .title {
    text-align: center;
    color: ${(props) => props.theme.blueDark};
    font-weight: 700;
    font-size: 3rem;
  }

  .Box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    @media ${device.tablet} {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }

    &__Form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;

      &--BoxInput {
        &__label {
          color: ${(props) => props.theme.blueDark};
          font-size: 1.5rem;
        }

        &__input {
          display: block;
          width: 100%;
          border: none;
          border-bottom: 1px solid ${(props) => props.theme.blueDark};
          color: ${(props) => props.theme.blueDark};
          padding: 0.5rem;
          font-size: 1.5rem;

          &:focus {
            outline: none;
          }
        }
      }

      &--Box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        &__CheckBox {
          appearance: none;
          background-color: #fff;
          border: 1px solid grey;
          margin: 0;
          font: inherit;
          color: blue;
          width: 2rem;
          height: 2rem;
          border-radius: 2px;
          position: relative;

          &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            transform: scale(0);
            transition: 1s transform ease-in-out;
            background: ${(props) => props.theme.blueDark};
            clip-path: polygon(
              53% 55%,
              68% 12%,
              88% 24%,
              76% 48%,
              69% 65%,
              61% 82%,
              42% 71%,
              17% 61%,
              26% 44%
            );
          }

          &:checked::before {
            transform: scale(1.1);
          }
        }

        &__text {
          margin: 0;
          font-size: 1.5rem;
          color: ${(props) => props.theme.blueDark};
        }
      }

      &--Submit {
        border: none;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.yellow};
        font-size: 3rem;
        border-radius: 20px;
      }
    }

    &__Center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 2rem;
      height: 2rem;
      width: 100%;

      @media ${device.tablet} {
        height: initial;
        width: 5rem;
      }

      &::after {
        content: '';
        background: ${(props) => props.theme.blueDark};
        height: 0.5rem;
        width: 100%;

        @media ${device.tablet} {
          width: 0.5rem;
          height: 100%;
        }
      }

      &--text {
        position: absolute;
        background: ${(props) => props.theme.white};
        padding: 1rem;
      }
    }

    &__Login {
      align-self: center;
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 1rem;
      padding: 2rem;

      &--Button {
        border: none;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        border-radius: 20px;
        color: ${(props) => props.theme.white};

        &__Img {
          background: white;
          height: 3rem;
          width: 3rem;
        }

        p {
          flex: 1;
          margin: 0;
        }
      }

      &--facebook {
        background: ${(props) => props.theme.blueLight};
      }

      &--google {
        background: black;
      }

      &--text {
        margin: 0;
        font-size: 1.4rem;
      }

      &--link {
        border: none;
        display: inline;
        background: none;
        font-size: 1.7rem;
        font-weight: 700;
        color: ${(props) => props.theme.blueDark};
      }
    }
  }
`;
