import React from 'react';

//Style
import * as Styled from './VideoSecondary.style';

const VideoSecondary = (props) => {
  return (
    <Styled.VideoBox className={props.className} onClick={() => props.onclick()} border={props.borderColor}>
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
    </Styled.VideoBox>
  );
};

export default VideoSecondary;
