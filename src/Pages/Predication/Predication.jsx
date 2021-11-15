import React from 'react';

//Components
import SectionCarousel from '../../components/SectionCarousel/SectionCarousel';
import Contact from '../../components/Contact/Contact';
import Container from '../../utility/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../utility/Title/Title';
import EnseignementBox from '../../components/EnseignementBox/EnseignementBox';

//Style
import * as Styled from './Predication.styled';

//Data
import {
  Articles,
  BoxInformation,
  InformationCarousel,
  theme,
} from './PredicationData';

const Predication = () => {
  return (
    <Container >
      <Styled.GridContainer>
        <SectionCarousel
          InformationCarousel={InformationCarousel}
          className="Carousel"
        />
        <Contact column className="form"/>
        <Pagination Data={BoxInformation} page="predication" className="pag"/>

        <article className="articles">
          <Title paint={(props) => props.theme.blueDark}>
            {Articles.title}
          </Title>
          {Articles.articlesInformation.map((item) => (
            <EnseignementBox {...item} box="secondary" key={Math.random()} />
          ))}
        </article>
        <article className="theme">
          <Title paint={(props) => props.theme.blueDark}>{theme.title}</Title>
          {theme.themeInformation.map((item) => (
            <EnseignementBox {...item} box="secondary" key={Math.random()} />
          ))}
        </article>
      </Styled.GridContainer>
    </Container>
  );
};

export default Predication;
