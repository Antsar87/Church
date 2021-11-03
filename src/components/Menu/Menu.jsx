import React from 'react';
import { Button } from '../../utility/Button/Button';

//Styles
import * as Styled from './Menu.style';

//Data
import {
  srcLogo,
  Links,
  srcIconSearch,
  inputData,
  ButtonsLinks,
} from './MenuData';

const Menu = () => {
  return (
    <Styled.Box>
      <Styled.Logo src={srcLogo} alt="Logo" />
      <Styled.BoxUl>
        {Links.map(({ content, link }, idx) => (
          <Styled.BoxLink key={idx}>
            <Styled.Link href={link}>{content}</Styled.Link>
          </Styled.BoxLink>
        ))}
      </Styled.BoxUl>
      <Styled.Form>
        <Styled.Submit>
          <img src={srcIconSearch} alt="Recherche" />
        </Styled.Submit>
        <Styled.Input {...inputData} />
      </Styled.Form>
      <Styled.BoxButtons>
        {ButtonsLinks.map(({ content, type, Icon }, idx) => (
          <Button type={type} key={idx}>
            {Icon && <img src={Icon} alt="Live" />}
            {content}
          </Button>
        ))}
      </Styled.BoxButtons>
    </Styled.Box>
  );
};

export default Menu;
