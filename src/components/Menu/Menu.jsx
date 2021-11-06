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
      <div style={{ maxWidth: '1200px', margin: '0 auto', overflow: "hidden" }}>
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

        <nav className="navbar navbar-expand-xl navbar-dark ">
          <div className="container-fluid" style={{ padding: '2rem' }}>
            <Styled.Logo src={srcLogo} alt="Logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <ul className="nav-item mb-2 mt-5">
                  <Links />
                </ul>
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
      </div>
    </Styled.Box>
  );
};

export default Menu;
