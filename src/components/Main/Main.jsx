import React from 'react';

//Components
import MainCarousel from '../MainCarousel/MainCarousel';
import Title from '../../utility/Title/Title';

///Style
import * as Styled from './Main.style';

//Data
import { Carousel_Information, img, TitleAnnonce, TitlePredication } from './MainData';

const Main = () => {
  return (
    <Styled.Main>
      <Styled.Precation>
        <Title paint={(props) => props.theme.blueDark}>{TitlePredication}</Title>
        <Styled.PrecationBox>
          <MainCarousel CarouselInformation={Carousel_Information} />
        </Styled.PrecationBox>
      </Styled.Precation>
      <Styled.Annonce>
        <Styled.MainTitle>{TitleAnnonce}</Styled.MainTitle>
        <img src={img} alt="Annonce"/>
      </Styled.Annonce>
    </Styled.Main>
  );
};

export default Main;
