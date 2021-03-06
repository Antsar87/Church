import styled, { css } from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  border: none;
  font-weight: 700;
  text-transform: capitalize;
  padding: .5rem 1rem;
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
      gap: 1rem;
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

    ${(props) =>
    props.type === 'secondary-DarkBlue' &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.blueDark};
      border-radius: 30px;
    `}

    ${(props) =>
    props.type === 'secondary-DarkPink' &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.pinkDark};
      border-radius: 30px;
    `}

    ${(props) =>
    props.type === 'green' &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.greenDark};
      border-radius: 30px;
    `}

    ${(props) =>
    props.type === 'yellow' &&
    css`
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.yellow};
      border-radius: 30px;
    `}

    ${(props) =>
    props.type === 'blueLight' &&
    css`
      color: ${(props) => props.theme.blueLight};
      background: ${(props) => props.theme.white};
      border-radius: 30px;
    `}
`;
