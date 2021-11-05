import styled from 'styled-components';

export const Temoignages = styled.div`
  margin-top: 3rem;
`;

export const Box = styled.div`
  background: ${(props) => props.theme.white};
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #abadb0;
`;

export const BoxChild = styled.div`
  display: flex;
  margin: 1.3rem;
  gap: 3rem;
`;

export const BoxImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxContent = styled.div`
  h3 {
    font-weight: 700;
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
