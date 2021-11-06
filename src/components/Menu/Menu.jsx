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
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Styled.Flex>
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
        </Styled.Flex>
      </div>

      <nav class="navbar navbar-expand-xl navbar-dark ">
        <div class="container-fluid" style={{ padding: '2rem' }}>
          <Styled.Logo src={srcLogo} alt="Logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mb-2 mt-5">
                <Links />
              </li>
              <li className="nav-item mb-3">
                <Recherche />
              </li>
              <li className="nav-item">
                <Styled.BoxButtons>
                  {ButtonsLinks.map(({ content, type, Icon, alt }, idx) => (
                    <Button type={type} key={idx}>
                      {Icon && <img src={Icon} alt={alt} />}
                      {content}
                    </Button>
                  ))}
                </Styled.BoxButtons>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Styled.Box>
  );
};

export default Menu;
