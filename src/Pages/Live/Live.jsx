import React, { useEffect, useState } from 'react';

import profile from '../../images/img/Profile.png';

//Video


//Components
import VideoMain from '../../components/VideoMain/VideoMain';
import VideoSecondary from '../../components/VideoSecondary/VideoSecondary';
import Container from '../../utility/Container/Container';
import VideoTitle from '../../components/VideoTitle/VideoTitle';
import Pagination from '../../components/Pagination/Pagination';

///Style
import * as Styled from './Live.styled';

//Data
import { defaultVideo, recommends, title, videos } from './LiveData';

const Live = () => {
  const [src, setSrc] = useState(defaultVideo);
  const [tf, setTF] = useState(true);

  useEffect(() => {
    const i = setTimeout(() => {
      setTF(false);
    }, 300);
    return () => {
      setTF(true);
      clearTimeout(i);
    };
  }, [src]);

  return (
    <Styled.Live>
      <Container>
        <h3 className="title">{title}</h3>
        <Styled.LiveHeader>
          {tf === false ? (
            <VideoMain video={src} className="videoMain" />
          ) : (
            <div className="videoMain">
              <div className="clock">
                
                <div className="clock-loader"></div>
              </div>
            </div>
          )}
          {recommends.map((item, idx) => (
            <VideoSecondary
              img={item.img}
              title={item.title}
              onclick={() => setSrc(item.src)}
              borderColor="grey"
              className="secondary"
              key={idx}
            />
          ))}
        </Styled.LiveHeader>
        <VideoTitle
          img={profile}
          name="Carl MASSALA"
          title="Culte de contemplation et de célébration Vases d’Honneur -"
        />

        <Styled.LiveSection>
          <Pagination
            Data={videos}
            className="pag"
            page="live"
            perpage={12}
            onclick={(src) => setSrc(src)}
          />
        </Styled.LiveSection>
      </Container>
    </Styled.Live>
  );
};

export default Live;
