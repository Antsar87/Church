import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  gap: 1rem;
  background: ${(props) => props.theme.white};
  border-radius: 10px;

  @media (min-width: 530px) {
    flex-direction: row;
  }

  .Img {
    width: 100%;
    object-fit: cover;

    @media (min-width: 530px) {
      width: 25rem;
    }
  }

  .Content {
    width: 100%;

    &__text {
      color: ${(props) => props.theme.blueDark};
      font-size: 2.5rem;
    }

    &__DataBox {
      border-bottom: 1px solid black;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      &--box {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      &--img {
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &--text {
        margin: 0;
        font-size: 1.5rem;
        color: ${(props) => props.theme.blueDark};
      }
    }

    &__Box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column-reverse;
      gap: 1rem;

      @media ${device.mobileS} {
        flex-direction: row;
      }

      &--Options {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;

        img {
          height: 2rem;
        }
      }

      &--Social {
        display: flex;
        align-items: center;
        gap: 1rem;

        p {
          font-size: 1.5rem;
          color: ${(props) => props.theme.blueDark};
          margin: 0;
        }

        img {
          width: 3rem;
        }

        @media ${device.tablet} {
          img {
            height: 4rem;
            width: 4rem;
          }
        }
      }
    }
  }
`;
