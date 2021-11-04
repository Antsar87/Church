import Slider from 'react-slick';
import React from 'react';

//Component
import { Button } from '../../utility/Button/Button';

//Importing Icon

//Importing Arrows
import ArrowLeft from '../../images/Arrows/ArrowLeftMain.png';
import ArrowRight from '../../images/Arrows/ArrowRightMain.png';

//Style
import * as Styled from './MainCarousel.style';

const MainCarousel = ({ slidesToShow, slidesToScroll, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    nextArrow: (
      <Styled.NextArrow>
        <img src={ArrowRight} alt="Arrow" />
      </Styled.NextArrow>
    ),
    prevArrow: (
      <Styled.PrevArrow>
        <img src={ArrowLeft} alt="Arrow" />
      </Styled.PrevArrow>
    ),
  };
  return (
    <Styled.Box>
      <Slider {...settings}>{children}</Slider>
      <Button style={{ alignSelf: 'flex-end' }} type="secondary-DarkBlue">
        voir plus
      </Button>
    </Styled.Box>
  );
};

export default MainCarousel;
