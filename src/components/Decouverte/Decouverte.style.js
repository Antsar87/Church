import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Decouverte = styled.div`
  padding: 0 2rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;

    @media ${device.mobileM} {
      height: 30rem;
    }
  }

  p {
    padding: 0 1rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;
