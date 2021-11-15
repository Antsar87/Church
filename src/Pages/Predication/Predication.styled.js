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
`;
