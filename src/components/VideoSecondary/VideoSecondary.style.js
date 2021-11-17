import styled from 'styled-components';

export const VideoBox = styled.div`
  border-bottom: 1px solid ${(props) => props.border};
  img {
    width: 100%;
    height: 15rem;
    border-radius: 10px;
    object-fit: cover;
  }

  h2 {
    margin-top: .25rem;
  }
`;
