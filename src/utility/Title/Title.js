import styled from 'styled-components';

const Title = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  position: relative;
  color: ${(props) => props.paint};

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    margin-left: 10px;
    width: 30rem;
    border: 1px solid ${(props) => props.paint};
  }
`;

export default Title;
