import styled from 'styled-components';

export const Footer = styled.footer`
  background: black;
  padding: 0 7rem;
  margin-top: 3rem;
  height: 20rem;
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.img`
  height: 8rem;
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

export const Live = styled.a`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.blueDark};
  padding: 0.25rem;
  text-decoration: none;
  font-size: 1.5rem;

  img {
    width: 2.3rem;
    margin-right: 1.2rem;
  }
`;
