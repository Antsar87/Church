import React from 'react';

//Style
import * as Styled from './SectionBoxes.style.js';

const SectionBoxes = ({ InformationMessages }) => {
  return (
    <>
      {InformationMessages.map(({ title, content, author }, idx) => (
        <Styled.Box key={idx}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{content}</Styled.Content>
          <Styled.Author>{author}</Styled.Author>
        </Styled.Box>
      ))}
    </>
  );
};

export default SectionBoxes;
