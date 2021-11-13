import styled from 'styled-components';
import { device } from '../../config/Responsive';

const Title = styled.h2`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 3rem;
  position: relative;
  color: ${(props) => props.paint};

  &::after {
    content: '';
    display: ${(props) => (props.VoF === 'out' ? 'none' : 'inline')};
    position: absolute;
    bottom: 5px;
    margin-left: 10px;
    width: 10rem;
    border: 1px solid ${(props) => props.paint};

    @media ${device.mobileL}{
      width: 30rem;
    }

    @media ${device.laptop} {
      width: 50rem;
    }
  }
`;

export default Title;
