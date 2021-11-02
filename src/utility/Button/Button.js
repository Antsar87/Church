import styled, { css } from 'styled-components';

export const Button = styled.a`
  text-decoration: none;
  font-weight: 700;
  text-transform: capitalize;
  padding: 5px 15px;
  border-radius: 2px;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) =>
    props.type === 'live' ? props.theme.blueDark : props.theme.white};

  ${(props) =>
    props.type === 'live' &&
    css`
      background: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid white;

      img {
        height: 2rem;
      }
    `}

  ${(props) =>
    props.type === 'outline' &&
    css`
      background: transparent;
      border: 1px solid ${(props) => props.theme.yellow};
    `}

    ${(props) =>
    props.type === 'filled' &&
    css`
      background: ${(props) => props.theme.yellow};
      padding: 5px 30px;
    `}
`;
