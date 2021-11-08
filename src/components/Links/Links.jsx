import React from 'react';

//Routes
import { Link } from 'react-router-dom';

//Style
import * as Styled from './Links.styled';

///Data
import { LinkInformation } from './LinksData';

const Links = () => {
  return (
    <>
      {LinkInformation.map(({ content, link }, idx) => (
        <Styled.BoxLink key={idx}>
          <Link to={link}>{content}</Link>
        </Styled.BoxLink>
      ))}
    </>
  );
};

export default Links;
