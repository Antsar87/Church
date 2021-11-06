import styled from "styled-components";

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
