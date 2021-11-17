//Style
import * as Style from './VideoMain.styled';

const VideoMain = (props) => {
  return(
  <Style.Video controls autoPlay className={props.className}>
    <source src={props.video} type="video/mp4" />
  </Style.Video>)
};

export default VideoMain;
