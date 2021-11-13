import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Contact = styled.div`
  padding-top: 10rem;
  position: relative;
  z-index: 5;


  .self {
    text-align: end;
  }

  .Box__Img {
    height: 25rem;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 1rem;
    &--Back {
      background: black;
      height: 100%;
    z-index: 5;

    }
  }

  .Container {
    max-width: 700px;
    margin: 0 auto;
  }

  .Form {
    background: ${(props) => props.theme.white};
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    z-index: 2;

    &__Title {
      color: ${(props) => props.theme.blueDark};
      font-weight: 900;
      font-size: 3.5rem;
    }

    &__box {
      color: ${(props) => props.theme.blueDark};
      font-size: 1.9rem;
      font-weight: 600;
      padding: 1rem 2rem;
      display: block;
      width: 100%;
      margin: 1rem 0;
      background: #eee;
      border: none;
      border-radius: 10px;

      &::placeholder {
        color: ${(props) => props.theme.blueDark};
      }

      &:focus {
        outline: none;
      }
    }

    &__area {
      height: 20rem;
    }

    &__Button {
      border: none;
      padding: 1rem 0;
      font-size: 2rem;
      width: 100%;
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.blueDark};
      font-weight: 600;
      border-radius: 10px;
    }
  }

  .Contacts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet}{
      flex-direction: row;
    justify-content: space-between;

    }

    &__Box {
      &--title {
        color: ${(props) => props.theme.yellow};
        font-weight: 700;
        text-align: center;

        @media ${device.tablet} {
          text-align: initial;
        }
      }

      &--content {
        color: ${(props) => props.theme.blueDark};
        font-size: 2rem;
        font-weight: 700;
      }

      &--LinksBox {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        list-style: none;
        padding: 0;
      }
    }
  }
`;
