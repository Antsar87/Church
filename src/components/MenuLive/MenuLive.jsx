import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Recherche from '../../utility/Recherche/Recherche';
import { Button } from '../../utility/Button/Button';
import Container from '../../utility/Container/Container';

//Style
import * as Styled from './MenuLive.style';

//Data
import { ButtonsLinks, LiveImg, LogoImg } from './MenuLiveData';

const MenuLive = () => {
  return (
    <Styled.Nav>
      <Container>
        <Styled.NavBar>
          <Styled.NavBox className="flex">
            <li>
              <Link to="/">
                <img src={LogoImg.src} alt={LogoImg.alt} className="logo" />
              </Link>
            </li>
            <li className="flex live">
              <img src={LiveImg.src} alt={LiveImg.alt} className="logo--Live" />
              <p>live streaming</p>
            </li>
          </Styled.NavBox>
          <Styled.NavBox className="flex">
            <li>
              <Recherche />
            </li>
            {ButtonsLinks.map(({ content, type, link }, idx) => (
              <li key={idx}>
                <Link to={link}>
                  <Button type={type}>{content}</Button>
                </Link>
              </li>
            ))}
          </Styled.NavBox>
        </Styled.NavBar>

        <nav className="navbar navbar-expand-xl navbar-dark ">
          <div className="container-fluid" style={{ padding: '2rem' }}>
            <Link to="/">
              <img src={LogoImg.src} alt={LogoImg.alt} className="logo" />
            </Link>
            
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <ul className="nav-item mb-2 mt-5"></ul>
                <li className="nav-item mb-3">
                  <Recherche />
                </li>
                <li className="nav-item flex">
                  <Styled.BoxButtons>
                    {ButtonsLinks.map(({ content, type, link }, idx) => (
                        <Link to={link} key={idx} >
                          <Button type={type}>{content}</Button>
                        </Link>
                    ))}
                  </Styled.BoxButtons>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </Styled.Nav>
  );
};

export default MenuLive;
