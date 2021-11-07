import React from 'react';

//Style
import * as Styled from "./Links.styled"

///Data
import { Link } from './LinksData';
const Links = () => {
  return (
    <>
      {Link.map(({ content, link }, idx) => (
        <Styled.BoxLink key={idx}>
          <Styled.Link href={`#${link}`}>{content}</Styled.Link>
        </Styled.BoxLink>
      ))}
    </>
  );
};

export default Links;
