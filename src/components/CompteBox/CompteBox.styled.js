import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const CompteBox = styled.div`
  padding: 20rem 2rem 10rem 2rem;
  @media ${device.laptop} {
    padding: 10rem 0;
  }
`;
