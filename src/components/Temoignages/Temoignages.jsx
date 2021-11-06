import React from 'react';

//Componets
import Title from '../../utility/Title/Title';
import MainCarousel from '../MainCarousel/MainCarousel';

//Style
import * as Styled from './Temoignages.styled';
import { Information, title } from './TemoignagesData';

const Temoignages = () => {
  return (
    <Styled.Temoignages>
      <Title paint={(props) => props.theme.blueLight}>{title}</Title>
      <Styled.Box>
        <MainCarousel
          slidesToShow={1}
          slidesToScroll={1}
          paint="blueLight"
          rows={2}
          slidesPerRow={2}
        >
          {Information.map(({ img, content, title }, idx) => (
            <div key={idx}>
              <Styled.BoxChild>
                <Styled.BoxImg>
                  <img src={img} alt="Temoignages" />
                </Styled.BoxImg>
                <Styled.BoxContent>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </Styled.BoxContent>
              </Styled.BoxChild>
            </div>
          ))}
        </MainCarousel>
      </Styled.Box>
    </Styled.Temoignages>
  );
};

export default Temoignages;
