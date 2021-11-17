import React from 'react';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

//Components
import Recherche from '../../utility/Recherche/Recherche';
import Links from '../Links/Links';

//Style
import * as Styled from './Footer.styled';

//Data
import { ButtonInformation, Contact, Main, Menu } from './FooterData';

const Footer = () => {
  const location = useLocation()
  return (
    <Styled.Footer location={location}>
      <Styled.Flex>
        <Styled.Box className="responsive_Center">
          <Styled.Logo src={Main.Logo} />
          <Styled.Title>{Main.Title}</Styled.Title>
          <Styled.SocialMediaBox>
            {Main.SocialMedia.map((item, idx) => (
              <Styled.SocialMediaLink key={idx} href={item.link}>
                <img src={item.img} alt={item.alt} />
              </Styled.SocialMediaLink>
            ))}
          </Styled.SocialMediaBox>
        </Styled.Box>

        <div className="responsive">
          <Styled.Box>
            <Styled.Title>{Menu}</Styled.Title>
            <Styled.Menu>
              <Links />
            </Styled.Menu>
          </Styled.Box>
          <Styled.Box>
            <Styled.Title>{Contact.Title}</Styled.Title>
            <Styled.Content>
              <h3>{Contact.Content}</h3>
              {Contact.Information.map((item, idx) => (
                <Fragment key={idx}>
                  <div className="flex">
                    <img src={item.img} alt={item.alt} />
                    <p>{item.content}</p>
                  </div>
                </Fragment>
              ))}
            </Styled.Content>
          </Styled.Box>
        </div>
        <Styled.Box className="last">
          <Recherche paint={(props) => props.theme.blueDark} />
          <Link to="/live">
            <Styled.Live href={ButtonInformation.Link}>
              <img src={ButtonInformation.IconLive} alt="Live" />
              {ButtonInformation.Content}
            </Styled.Live>
          </Link>
        </Styled.Box>
      </Styled.Flex>
    </Styled.Footer>
  );
};

export default Footer;
