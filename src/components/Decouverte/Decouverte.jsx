import React from 'react';

//Components
import Title from '../../utility/Title/Title';
import MainCarousel from '../MainCarousel/MainCarousel';

///Style
import * as Styled from './Decouverte.style';

//Data
import { Information } from './DecouverteData';

const Decouverte = () => {
  const responsive = [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];
  return (
    <Styled.Decouverte id="decouverte">
      <Title paint={(props) => props.theme.greenDark}>découverte</Title>

      <MainCarousel
        slidesToShow={5}
        slidesToScroll={1}
        paint="green"
        responsive={responsive}
      >
        {Information.map((item, idx) => (
          <Styled.Box key={idx}>
            <img src={item.img} alt="Content" />
            <p>{item.content}</p>
          </Styled.Box>
        ))}
      </MainCarousel>
    </Styled.Decouverte>
  );
};

export default Decouverte;
