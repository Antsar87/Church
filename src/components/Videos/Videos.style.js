import styled from 'styled-components';

export const Video = styled.div`
  padding: 0 2rem;
`;

export const VideoBox = styled.div`
  background: ${(props) => props.theme.blackLight};
  padding: 2rem;
  border-radius: 20px;
  margin-top: 1rem;
`

export const Box = styled.div`

  img {
    width: 100%;
  }

  p {
    color:white;
    font-size: 1.3rem;
  }
`;
