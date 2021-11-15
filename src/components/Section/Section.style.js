import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Box = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50rem;
  padding: 0 2rem;
  gap: 1rem;
  border-radius: 10px;
  margin-top: 3rem;

  @media ${device.tablet} {
    height: 45rem;
    flex-direction: row;
  }

  
`;

export const Boxes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;
