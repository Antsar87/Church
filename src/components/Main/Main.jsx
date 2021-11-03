import React from 'react';

//Components
import MainCarousel from '../MainCarousel/MainCarousel';
import Title from '../../utility/Title/Title';

///Style
import * as Styled from './Main.style';

//Data
import { Carousel_Information } from './MainData';

const Main = () => {
  return (
    <Styled.Main>
      <Styled.Precation>
        <Title paint={(props) => props.theme.blueDark}>Prédication</Title>
        <Styled.PrecationBox>
          <MainCarousel CarouselInformation={Carousel_Information} />
        </Styled.PrecationBox>
      </Styled.Precation>
      <div></div>
    </Styled.Main>
  );
};

export default Main;
