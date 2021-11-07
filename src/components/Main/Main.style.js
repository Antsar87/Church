import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 2rem;

  @media ${device.tablet} {
    height: 50rem;
    flex-direction: row;
  }

  .Title {
    margin: 0 !important;
  }
`;

export const Precation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex: 2;
  }
`;

export const PrecationBox = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.white};
  height: 100%;
  padding: 1rem 2rem;
`;

export const Annonce = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 40rem;

  @media ${device.tablet} {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const MainTitle = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.blueDark};
  font-weight: 700;
`;

export const BoxImg = styled.div`
  @media ${device.tablet} {
    height: 30rem;
  }

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
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

export const BoxFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  .box_Img {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    margin-bottom: 0;
    font-size: 1.3rem;
  }

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
