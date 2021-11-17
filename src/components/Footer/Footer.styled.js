import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Footer = styled.footer`
  background: black;
  padding: 2rem;
  overflow: hidden;

  margin-top: ${(props) =>
    props.location.pathname === '/live' ? '0' : '3rem'};

  @media ${device.laptop} {
    padding: 0 7rem;
    height: 20rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  height: 100%;

  .responsive {
    display: flex;
    gap: 5rem;
  }

  .responsive_Center {
    justify-content: center;
    align-items: center;

    @media ${device.mobileL} {
      align-items: flex-start;
    }
  }

  .last {
    display: none;

    @media ${device.tablet} {
      display: block;
    }
  }

  @media ${device.mobileL} {
    flex-direction: row;
  }

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: 8rem;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.yellow};
  margin: 0;
`;

export const SocialMediaBox = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialMediaLink = styled.a`
  img {
    height: 3rem;
  }
`;

export const Menu = styled.ul`
  padding: 0;
`;

export const Content = styled.div`
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      margin: 0;
      font-size: 1.4rem;
    }

    img {
      height: 2rem;
    }
  }
`;

export const Live = styled.button`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.blueDark};
  padding: 0.25rem;
  text-decoration: none;
  font-size: 1.5rem;
  display: inline-block;
  text-align: start;
  width: 100%;
  margin-top: 1.5rem;
  border: none;

  img {
    width: 2.3rem;
    margin-right: 1.2rem;
  }
`;
