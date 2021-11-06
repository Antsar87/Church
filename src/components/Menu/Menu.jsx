import React from 'react';
import { Button } from '../../utility/Button/Button';

import Recherche from '../../utility/Recherche/Recherche';

//Components
import Links from '../Links/Links';

//Styles
import * as Styled from './Menu.style';

//Data
import { srcLogo, ButtonsLinks } from './MenuData';

const Menu = () => {
  return (
    <Styled.Box>
      <Styled.Logo src={srcLogo} alt="Logo" />
      <Links />
      <Recherche />
      <Styled.BoxButtons>
        {ButtonsLinks.map(({ content, type, Icon, alt }, idx) => (
          <Button type={type} key={idx}>
            {Icon && <img src={Icon} alt={alt} />}
            {content}
          </Button>
        ))}
      </Styled.BoxButtons>
    </Styled.Box>
  );
};

export default Menu;
