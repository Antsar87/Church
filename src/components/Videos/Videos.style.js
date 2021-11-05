import styled from 'styled-components';

export const Video = styled.div`
  background: ${(props) => props.theme.blackLight};
  padding: 2rem;
  border-radius: 20px;
  margin-top: 3rem;
`;

export const Box = styled.div`

  img {
    width: 100%;
  }

  p {
    color:white;
    font-size: 1.3rem;
  }
`;