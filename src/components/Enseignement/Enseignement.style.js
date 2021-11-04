import styled from 'styled-components';

export const Enseignement = styled.div`
margin-top: 2rem;
`;

export const BoxFlex = styled.div`
  background: ${(props) => props.theme.white};
  display: flex;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  border: 3px solid #a2aba5;
  margin-top: 2rem;

  div {
    flex: 1;
  }
`;
