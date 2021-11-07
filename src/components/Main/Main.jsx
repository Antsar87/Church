import React from 'react';
import Watch from '../../images/Icon/Icon_Header/HORLOGE.png';

//Components
import MainCarousel from '../MainCarousel/MainCarousel';
import Title from '../../utility/Title/Title';

///Style
import * as Styled from './Main.style';

//Data
import {
  Carousel_Information,
  img,
  TitleAnnonce,
  TitlePredication,
} from './MainData';

const Main = () => {
  const responsive = [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];

  return (
    <Styled.Main>
      <Styled.Precation>
        <Title paint={(props) => props.theme.blueDark} className="Title">
          {TitlePredication}
        </Title>
        <Styled.PrecationBox>
          <MainCarousel
            slidesToShow={3}
            slidesToScroll={2}
            paint="secondary-DarkBlue"
            responsive={responsive}
          >
            {Carousel_Information.map(
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
                      <div className="box_Img">
                        <img src={ImgProfile} alt="profile" />
                      </div>
                      <p>{name}</p>
                    </Styled.BoxFlex>
                    <Styled.BoxFlex>
                      <div className="box_Img">
                        <img src={Watch} alt="time" />
                      </div>
                      <p>{date}</p>
                    </Styled.BoxFlex>
                  </Styled.BoxProfile>
                </div>
              )
            )}
          </MainCarousel>
        </Styled.PrecationBox>
      </Styled.Precation>
      <Styled.Annonce>
        <Styled.MainTitle className="Title">{TitleAnnonce}</Styled.MainTitle>
        <img src={img} alt="Annonce" />
      </Styled.Annonce>
    </Styled.Main>
  );
};

export default Main;
