import styled from 'styled-components';

export const CopyRight = styled.div`
  background: ${(props) => props.theme.blueDark};
  border-top: 3px solid ${props => props.theme.white};

  p {
    color: ${props => props.theme.white};
    margin: 0;
    padding: 1rem 7rem;
    font-size: 1.5rem;
  }
`;
