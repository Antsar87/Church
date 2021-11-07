import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Enseignement = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
`;

export const BoxFlex = styled.div`
  background: ${(props) => props.theme.white};
  border: 3px solid #a2aba5;
  border-radius: 10px;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  margin-top: 2rem;
  flex-direction: column;

  div {
    flex: 1;
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 2rem;
  }
`;
