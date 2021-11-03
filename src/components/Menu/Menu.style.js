import styled from 'styled-components';

export const Box = styled.div`
  background: ${(props) => props.theme.blueDark};
  padding: 0 2rem;
  height: 7rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled.img`
  width: 15rem;
`;

export const BoxUl = styled.ul`
  display: flex;
  gap: 2rem;
  margin-bottom: 0;
`;

export const BoxLink = styled.li`
  list-style: none;
`;

export const Link = styled.a`
  font-size: 1.3rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(161, 161, 161, 0.452);
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

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
