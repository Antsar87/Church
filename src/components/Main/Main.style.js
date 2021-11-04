import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  height: 48rem;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Precation = styled.div`
  height: 90%;
  width: 67%;
`;

export const PrecationBox = styled.div`
  border-radius: 10px;
  height: 100%;
  background: ${(props) => props.theme.white};
  padding: 1rem 2rem 0 2rem;
`;

export const Annonce = styled.div`
  flex: 1;
  height: 100%;
  padding-top: 1rem;

  img {
    height: 92%;
    width: 100%;
  }
`;

export const MainTitle = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.blueDark};
  font-weight: 700;
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
