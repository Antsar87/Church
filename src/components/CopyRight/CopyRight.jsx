import React from 'react';

//Style
import * as Styled from './CopyRight.styled';

//Data
import { copyRight } from './CopyRightData';

const CopyRight = () => {
  return (
    <Styled.CopyRight>
      <p>{copyRight}</p>
    </Styled.CopyRight>
  );
};

export default CopyRight;
