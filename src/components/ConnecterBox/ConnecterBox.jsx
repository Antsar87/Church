//Components
import FormBox from '../FormBox/FormBox';

//Style
import * as Styled from './ConnecterBox.styled';

//Data
import { ConnecterInformation } from './ConnecterBoxData';

const ConnecterBox = () => {
  return (
    <Styled.ConnecterBox>
      <FormBox Information={ConnecterInformation} />
    </Styled.ConnecterBox>
  );
};

export default ConnecterBox;
