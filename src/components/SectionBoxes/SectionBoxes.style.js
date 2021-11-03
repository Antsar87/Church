import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 100%;
  background: ${(props) => props.theme.blueDark};
  border-radius: 10px;
  padding: 20px 60px 20px 30px;
  text-align: justify;

  &:nth-child(even) {
    background: black;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.p`
  color: ${(props) => props.theme.yellow};
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 0;
`;

export const Content = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`;

export const Author = styled.p`
  color: ${(props) => props.theme.yellow};
  font-size: 1.3rem;
  position: absolute;
  bottom: 0;
  right: 10px;
`;
