import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Box = styled.div`
  position: relative;
  height: 100%;
  background: ${(props) => props.theme.blueDark};
  border-radius: 10px;
  text-align: justify;
  padding: 2rem;

  &:nth-child(even) {
    background: black;
  }

  @media ${device.tablet} {
    padding: 2rem 6rem 2rem 3rem;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.yellow};
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
  @media ${device.tablet} {
    margin-bottom: 0;

  }
`;

export const Content = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`;

export const Author = styled.p`
  color: ${(props) => props.theme.yellow};
  font-size: 1.3rem;
  position: absolute;
  bottom: 0;
  right: 10px;
`;
