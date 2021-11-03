import React from 'react';

///Components
import SectionBoxes from '../SectionBoxes/SectionBoxes';
import SectionCarousel from '../SectionCarousel/SectionCarousel';

/// Style
import * as Styled from './Section.style';

///Data
import {
  ArrowLeft,
  ArrowRight,
  InformationCarousel,
  InformationMessages,
} from './SectionData';

const Section = () => {
  return (
    <Styled.Box>
      <SectionCarousel
        ArrowLeft={ArrowLeft}
        ArrowRight={ArrowRight}
        InformationCarousel={InformationCarousel}
      />
      <div>
        <SectionBoxes InformationMessages={InformationMessages} />
      </div>
    </Styled.Box>
  );
};

export default Section;
