import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${props => props.paint || "rgba(161, 161, 161, 0.452)"} ;
  padding: 0 0.5rem;
  border-radius: 2px;
  height: 30px;
`;

export const Submit = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    height: 1.5rem;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: white;
  &::placeholder {
    text-transform: capitalize;
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
  }

  &:focus {
    outline: none;
  }
`;
