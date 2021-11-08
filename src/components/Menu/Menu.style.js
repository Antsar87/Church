import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Box = styled.div`
  background: ${(props) => props.theme.blueDark};
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media ${device.laptop} {
    .navbar {
      display: none;
    }
  }
  ul {
    padding-left: 0 !important;
  }
`;

export const Flex = styled.div`
  height: 6rem;
  display: none;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media ${device.laptop} {
    display: flex;
  }
  .Links {
    display: flex;
    gap: 2rem;
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  width: 15rem;
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  img {
    height: 2rem;
  }
  a {
    font-size: 1rem;
  }
`;
