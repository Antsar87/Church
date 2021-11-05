import React from 'react';

//Components
import Title from '../../utility/Title/Title';
import MainCarousel from '../MainCarousel/MainCarousel';

//Style
import * as Styled from './Videos.style';

//Data
import { Information } from './VideosData';

const Videos = () => {
  return (
    <Styled.Video>
      <Title VoF="out" paint={(props) => props.theme.yellow}>
        vidéos
      </Title>
      <MainCarousel slidesToShow={3} slidesToScroll={1} paint="yellow">
        {Information.map((item, idx) => (
          <Styled.Box key={idx}>
            <img src={item.img} alt="video" />
            <p>{item.content}</p>
          </Styled.Box>
        ))}
      </MainCarousel>
    </Styled.Video>
  );
};

export default Videos;
