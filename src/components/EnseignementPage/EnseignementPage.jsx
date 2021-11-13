import React from 'react';
import watch from '../../images/Icon/Icon_Header/HORLOGE.png';

//Components
import { Button } from '../../utility/Button/Button';
import Title from '../../utility/Title/Title';
import EnseignementBox from '../EnseignementBox/EnseignementBox';
import EnseignementPageSocial from '../EnseignementPageSocial/EnseignementPageSocial';

///Style
import * as Styled from './EnseignementPage.styled';

//Data
import {
  Articles,
  Comments,
  CommentsBox,
  Data,
  theme,
  DataAnnonce,
} from './EnseignementPageData';

const EnseignementPage = () => {
  return (
    <Styled.Box>
      <div className="Back">
        <div className="Back--img"> </div>
      </div>
      <div className="Box">
        <div className="Box__Grid">
          <div className="Box__mainBox">
            <h2 className="Box__mainBox--title">{Data.title}</h2>
            <div className="Box__mainBox--box">
              <div className="Box__mainBox--box__time">
                <img src={watch} alt="" />
                <p className="Box__mainBox--box__text">{Data.time}</p>
              </div>
              <EnseignementPageSocial className="Box__Social" />
            </div>
            <img className="Box__mainBox--photo" alt="" src={Data.img} />
            <div className="Box__mainBox--content">{Data.content}</div>
          </div>
          <EnseignementPageSocial className="Box__SocialGrid Box__Social" />

          <div className="Box__Comment">
            <h2 className="Box__Comment--title">{Comments.title}</h2>
            <textarea className="Box__Comment--area" />
            <div className="Box__Comment--flex">
              <Button
                className="Box__Comment--button"
                type="secondary-DarkBlue"
              >
                {Comments.buttonContent}
              </Button>

              <p className="Box__Comment--text">{Comments.content}</p>
            </div>

            {CommentsBox.map((item, idx) => (
              <div className="Box__Comment--Box" key={idx}>
                <div className="Box__Comment--flex">
                  <div className="Box__Comment--flex">
                    <img
                      src={item.img}
                      alt=""
                      className="Box__Comment--Box__img"
                    />
                    <p className="Box__Comment--Box__name">{item.name}</p>
                  </div>
                  <div>
                    <p className="Box__Comment--Box__time">{item.time}</p>
                  </div>
                </div>
                <div className="Box__Comment--Box__Content">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="Box__Annonce">
            <h2 className="Box__Annonce--title">{DataAnnonce.title}</h2>
            <img src={DataAnnonce.annonceImg} alt="" />
          </div>
          <article className="Box__Article">
            <Title paint={(props) => props.theme.blueDark}>
              {Articles.title}
            </Title>
            {Articles.articlesInformation.map((item) => (
              <EnseignementBox {...item} box="secondary" key={Math.random()} />
            ))}
          </article>
          <div className="Box__Theme">
            <Title paint={(props) => props.theme.blueDark}>{theme.title}</Title>
            {theme.themeInformation.map((item) => (
              <EnseignementBox {...item} box="secondary" key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
    </Styled.Box>
  );
};

export default EnseignementPage;
