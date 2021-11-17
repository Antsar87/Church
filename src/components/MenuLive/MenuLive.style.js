import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Nav = styled.nav`
  background: ${(props) => props.theme.blackLight};
  color: ${(props) => props.theme.white};

  .flex {
    display: flex;
    align-items: center;
  }

  @media ${device.laptop} {
    .navbar {
      display: none;
    }
  }
`;

export const NavBar = styled.div`
  display: none;
  justify-content: space-between;
  padding: 1rem 1rem;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const NavBox = styled.ul`
  gap: 1rem;
  list-style: none;
  margin: 0;
  .logo {
    width: 13rem;
    margin-right: 3rem;
  }

  .logo--Live {
    height: 4rem;
    margin-right: 1rem;
  }

  p {
    margin: 0;
    font-size: 3rem;
    font-weight: 900;

    &::first-letter {
      text-transform: capitalize;
    }
  }
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
    text-decoration: none;
  }
`;
