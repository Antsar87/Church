import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 20.5rem);
  margin-top: 2rem;
`;

export const Precation = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / -1;
`;

export const PrecationBox = styled.div`
  border-radius: 10px;
  height: 100%;
  background: ${(props) => props.theme.white};
  padding: 1rem 2rem 3rem 2rem;
`;
