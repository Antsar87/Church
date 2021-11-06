import styled from 'styled-components';

export const Box = styled.div`
  background: ${(props) => props.theme.blueDark};
  padding: 0 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  .Links {
    display: flex;
    gap: 2rem;
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  width: 15rem;
`;



export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
