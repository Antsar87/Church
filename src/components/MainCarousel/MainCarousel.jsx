import Slider from 'react-slick';
import React from 'react';

//Importing Icon
import Watch from '../../images/Icon/Icon_Header/HORLOGE.png';

//Importing Arrows
import ArrowLeft from '../../images/Arrows/ArrowLeftMain.png';
import ArrowRight from '../../images/Arrows/ArrowRightMain.png';

//Style
import * as Styled from './MainCarousel.style';

const MainCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <Slider {...settings}>
        {props.CarouselInformation.map(
          ({ Img, type, text, ImgProfile, name, date }, idx) => (
            <div className="box" key={idx}>
              <Styled.BoxImg>
                <img src={Img} alt="Predication" />
              </Styled.BoxImg>

              <Styled.BoxText>
                <h3 className="type">{type}</h3>
                <h2 className="content">{text}</h2>
              </Styled.BoxText>

              <Styled.BoxProfile>
                <Styled.BoxFlex>
                  <img src={ImgProfile} alt="profile" />
                  <p>{name}</p>
                </Styled.BoxFlex>
                <Styled.BoxFlex>
                  <img src={Watch} alt="time" />
                  <p>{date}</p>
                </Styled.BoxFlex>
              </Styled.BoxProfile>
            </div>
          )
        )}
      </Slider>
    </Styled.Box>
  );
};

export default MainCarousel;
