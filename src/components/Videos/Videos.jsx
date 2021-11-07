import React from 'react';

//Components
import Title from '../../utility/Title/Title';
import MainCarousel from '../MainCarousel/MainCarousel';

//Style
import * as Styled from './Videos.style';

//Data
import { Information } from './VideosData';

const Videos = () => {
  const responsive = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];
  return (
    <Styled.Video id="video">
      <Styled.VideoBox>
        <Title VoF="out" paint={(props) => props.theme.yellow}>
          vidéos
        </Title>
        <MainCarousel
          slidesToShow={3}
          slidesToScroll={1}
          paint="yellow"
          responsive={responsive}
        >
          {Information.map((item, idx) => (
            <Styled.Box key={idx}>
              <img src={item.img} alt="video" />
              <p>{item.content}</p>
            </Styled.Box>
          ))}
        </MainCarousel>
      </Styled.VideoBox>
    </Styled.Video>
  );
};

export default Videos;
