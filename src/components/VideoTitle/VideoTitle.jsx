import React from 'react'

//style
import * as Styled from "./VideoTitle.style"

const VideoTitle = (props) => {
  return (
    <Styled.TitleBox>
      <img src={props.img} alt=""/>
      <section>
        
        <p>{props.name}</p>
        <h3>{props.title}</h3>
      </section>
    </Styled.TitleBox>
  )
}

export default VideoTitle
