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
