import React from 'react';

///Components
import SectionBoxes from '../SectionBoxes/SectionBoxes';
import SectionCarousel from '../SectionCarousel/SectionCarousel';

/// Style
import * as Styled from './Section.style';

///Data
import {
  InformationCarousel,
  InformationMessages,
} from './SectionData';

const Section = () => {
  return (
    <Styled.Box id="home">
      <SectionCarousel
        InformationCarousel={InformationCarousel}
        className="Carousel"
      />
      <Styled.Boxes>
        <SectionBoxes InformationMessages={InformationMessages} />
      </Styled.Boxes>
    </Styled.Box>
  );
};

export default Section;
