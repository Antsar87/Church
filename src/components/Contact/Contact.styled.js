import styled from 'styled-components';

export const Contact = styled.div`
  background: ${(props) => props.theme.blueDark};
  border-radius: 10px;
  margin-top: 3rem;
  height: 30rem;
`;

export const BoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Box = styled.div`
  width: 75%;
`;

export const BoxContent = styled.div`
  text-align: justify;

  h3 {
    color: ${(props) => props.theme.yellow};
    font-weight: 700;
    font-size: 3rem;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const BoxForm = styled.form`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  margin-top: 3rem;

  input,
  button {
    font-size: 2.5rem;
    border-radius: 20px;
    border: none;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  width: 35%;
  color: ${(props) => props.theme.blueDark};
  padding: 0 1rem;


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
  width: 25%;
  font-size: 2.5rem;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
