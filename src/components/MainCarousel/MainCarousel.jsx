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
//Yellow
import ArrowRightYellow from '../../images/Arrows/ArrowRightYellow.png';
import ArrowLeftYellow from '../../images/Arrows/ArrowLeftYellow.png';

//Yellow
import ArrowRightBlueLight from '../../images/Arrows/ArrowRightBlueLight.png';
import ArrowLeftBlueLight from '../../images/Arrows/ArrowLeftBlueLight.png';

//Style
import * as Styled from './MainCarousel.style';

const MainCarousel = ({
  slidesToShow,
  slidesToScroll,
  children,
  paint,
  rows,
  slidesPerRow,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    rows: rows || 1,
    slidesPerRow: slidesPerRow || 1,
    nextArrow: (
      <Styled.NextArrow>
        {paint === 'green' ? (
          <img src={ArrowRightGreen} alt="Next" />
        ) : paint === 'yellow' ? (
          <img src={ArrowRightYellow} alt="Next" />
        ) : paint === 'blueLight' ? (
          <img src={ArrowRightBlueLight} alt="Next" />
        ) : (
          <img src={ArrowRight} alt="Next" />
        )}
      </Styled.NextArrow>
    ),
    prevArrow: (
      <Styled.PrevArrow>
        {paint === 'green' ? (
          <img src={ArrowLeftGreen} alt="Next" />
        ) : paint === 'yellow' ? (
          <img src={ArrowLeftYellow} alt="Next" />
        ) : paint === 'blueLight' ? (
          <img src={ArrowLeftBlueLight} alt="Next" />
        ) : (
          <img src={ArrowLeft} alt="Next" />
        )}
      </Styled.PrevArrow>
    ),
  };
  return (
    <Styled.Box type={paint}>
      <Slider {...settings}>{children}</Slider>
      <Button
        style={{ position: 'absolute', right: 0, bottom: '0' }}
        type={paint}
      >
        voir plus
      </Button>
    </Styled.Box>
  );
};

export default MainCarousel;
