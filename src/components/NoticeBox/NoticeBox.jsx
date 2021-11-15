import React from 'react';

//Data
import {
  AudioImg,
  DownLoadImg,
  SocialText,
  WatchImg,
  YoutubeImg,
} from './NoticeBoxData';

//Components
import EnseignementPageSocial from '../EnseignementPageSocial/EnseignementPageSocial';

//Style
import * as Styled from './NoticeBox.styled';

const NoticeBox = (props) => {
  return (
    <Styled.NoticeBox>
      <img src={props.image} alt={props.alt} className="Img" />
      {/* Content */}
      <div className="Content">
        <p className="Content__text">{props.text}</p>

        {/* DataBox */}
        <div className="Content__DataBox">
          {/* Box */}
          <div className="Content__DataBox--box">
            <div className="Content__DataBox--img">
              <img src={props.photo} alt={props.name} />
            </div>
            <p className="Content__DataBox--text">{props.name}</p>
          </div>
          {/* Box */}

          {/* Box */}
          <div className="Content__DataBox--box">
            <div className="Content__DataBox--img">
              <img src={WatchImg.Watch} alt={WatchImg.alt} />
            </div>
            <p className="Content__DataBox--text">{props.time}</p>
          </div>
          {/* Box */}
        </div>
        {/* DataBox */}

        {/* Box */}
        <div className="Content__Box">
          <ul className="Content__Box--Options">
            <li>
              <img src={AudioImg.Audio} alt={AudioImg.alt} />
            </li>
            <li>
              <img src={YoutubeImg.Youtube} alt={YoutubeImg.alt} />
            </li>
            <li>
              <img src={DownLoadImg.Download} alt={DownLoadImg.alt} />
            </li>
          </ul>
          <EnseignementPageSocial
            className="Content__Box--Social"
            text={SocialText}
          />
        </div>
        {/* Box */}
      </div>
      {/* Content */}
    </Styled.NoticeBox>
  );
};

export default NoticeBox;
