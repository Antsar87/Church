import React from 'react';

//Component
import FormBox from '../FormBox/FormBox';

//Style
import * as Styled from './CompteBox.styled';

//Data
import { CompteInformation } from './CompteBoxData';

const CompteBox = () => {
  return (
    <Styled.CompteBox>
      <FormBox Information={CompteInformation} />
    </Styled.CompteBox>
  );
};

export default CompteBox;
