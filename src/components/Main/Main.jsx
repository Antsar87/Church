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
  return (
    <Styled.Main>
      <Styled.FlexTitle>
        <div className="box1">
          <Title paint={(props) => props.theme.blueDark}>
            {TitlePredication}
          </Title>
        </div>

        <div className="box2">
          <Styled.MainTitle>{TitleAnnonce}</Styled.MainTitle>
        </div>
      </Styled.FlexTitle>
      <Styled.Flex>
        <Styled.Precation>
          <Styled.PrecationBox>
            <MainCarousel
              slidesToShow={3}
              slidesToScroll={2}
              paint="secondary-DarkBlue"
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
            </MainCarousel>
          </Styled.PrecationBox>
        </Styled.Precation>
        <Styled.Annonce>
          <img src={img} alt="Annonce" />
        </Styled.Annonce>
      </Styled.Flex>
    </Styled.Main>
  );
};

export default Main;
