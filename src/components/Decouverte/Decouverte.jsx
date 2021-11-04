import React from 'react';

//Components
import Title from '../../utility/Title/Title';
import MainCarousel from '../MainCarousel/MainCarousel';

///Style
import * as Styled from './Decouverte.style';

//Data
import { Information } from './DecouverteData';

const Decouverte = () => {
  return (
    <Styled.Decouverte>
      <Title paint={(props) => props.theme.greenDark}>découverte</Title>

      <Styled.Flex>
        <MainCarousel slidesToShow={5} slidesToScroll={1} paint="green">
          {Information.map((item, idx) => (
            <Styled.Box key={idx}>
              <img src={item.img} alt="Content" />
              <p>{item.content}</p>
            </Styled.Box>
          ))}
        </MainCarousel>
      </Styled.Flex>
    </Styled.Decouverte>
  );
};

export default Decouverte;
