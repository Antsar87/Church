import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Contact = styled.div`
  padding: 0 2rem;
  margin-top: 3rem;
  height: 30rem;
`;

export const BoxFlex = styled.div`
  background: ${(props) => props.theme.blueDark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Box = styled.div`
  width: 95%;

  @media ${device.tablet} {
    width: 75%;
  }
`;

export const BoxContent = styled.div`
  text-align: center;

  h3 {
    color: ${(props) => props.theme.yellow};
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media ${device.mobileM} {
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media ${device.tablet} {
    text-align: justify;
    h3 {
      font-size: 2.9rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const BoxForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  @media ${device.tablet} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    height: 5rem;
  }
`;

export const Boxes = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  input,
  button {
    font-size: 1.4rem;
    border-radius: 20px;
    border: none;
    font-weight: 600;

    @media ${device.tablet} {
      font-size: 2rem;
    }
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 50%;
  color: ${(props) => props.theme.blueDark};
  padding: 0 1rem;

  @media ${device.mobileL} {
    flex: 1;
  }
  @media ${device.tablet} {
    width: 25rem;
  }

  &::placeholder {
    text-align: center;
    color: ${(props) => props.theme.blueDark};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.blueDark};
  font-size: 2.5rem;
  transition: all 1s ease;
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    width: 80%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
