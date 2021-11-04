import Slider from 'react-slick';
import React from 'react';

//Component
import { Button } from '../../utility/Button/Button';

//Importing Icon

//Importing Arrows
import ArrowLeft from '../../images/Arrows/ArrowLeftMain.png';
import ArrowRight from '../../images/Arrows/ArrowRightMain.png';
//Green
import ArrowRightGreen from '../../images/Arrows/ArrowRightGreen.png';
import ArrowLeftGreen from '../../images/Arrows/ArrowLeftGreen.png';

//Style
import * as Styled from './MainCarousel.style';

const MainCarousel = ({ slidesToShow, slidesToScroll, children, paint }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: (
      <Styled.NextArrow>
        {paint === 'green' ? (
          <img src={ArrowRightGreen} alt="Arrow" />
        ) : (
          <img src={ArrowRight} alt="Arrow" />
        )}
      </Styled.NextArrow>
    ),
    prevArrow: (
      <Styled.PrevArrow>
        {paint === 'green' ? (
          <img src={ArrowLeftGreen} alt="Arrow" />
        ) : (
          <img src={ArrowLeft} alt="Arrow" />
        )}
      </Styled.PrevArrow>
    ),
  };
  return (
    <Styled.Box type={paint}>
      <Slider {...settings}>{children}</Slider>
      <Button style={{ alignSelf: 'flex-end' }} type={paint}>
        voir plus
      </Button>
    </Styled.Box>
  );
};

export default MainCarousel;
