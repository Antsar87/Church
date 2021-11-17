import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const GridContainer = styled.div`
  overflow: hidden;
  margin-top: 3rem;
  display: grid;
  grid-template-areas:
    'C C C'
    'F F F'
    'A A A'
    'T T T'
    'P P P'
    'P P P';

  @media ${device.laptop} {
    grid-template-areas:
      'C C F'
      'P P A'
      'P P T'
      'P P .';
  }

  grid-template-rows: 400px;
  grid-template-columns: 300px !important;

  gap: 1rem;

  .Carousel {
    grid-area: C;
    align-self: center;

    @media ${device.tablet} {
      align-self: initial;
    }
  }

  .form {
    grid-area: F;
    padding: 2rem 1rem;
  }

  .pag {
    grid-area: P;
  }

  .articles {
    grid-area: A;
  }

  .theme {
    grid-area: T;
  }

  .boxImg {
    width: 100%;

    @media ${device.laptop} {
      height: 15rem;
      width: 10rem;
    }
    
  }

  .paginationBttns {
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    grid-row: 13 / 13;
    justify-content: center;

    @media ${device.tablet} {
      grid-row: 9 / 9;
      justify-content: flex-start;
    }

    @media ${device.laptop} {
      grid-row: 4 / 4;
    }
  }

  a {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.blueDark} !important;
    border-radius: 50%;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .previous,
  .next {
    a {
      text-decoration: none;
      font-size: 4rem;
      color: ${props => props.theme.blueDark} !important;
      background: none;
      font-weight: 300;
      padding: 0;
    }
  }

  .paginationActive {
    a {
      background: ${(props) => props.theme.blueDark};
      color: ${(props) => props.theme.white} !important;
    }
  }
`;
