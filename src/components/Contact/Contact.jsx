import React from 'react';

//Style
import * as Styled from './Contact.styled';

//Data
import {
  Button_Content,
  content,
  Placeholder_mail,
  Placeholder_Name,
  title,
} from './ContactData';
const Contact = () => {
  return (
    <Styled.Contact>
      <Styled.BoxFlex>
        <Styled.Box>
          <Styled.BoxContent>
            <h3>{title}</h3>
            <p>{content}</p>
          </Styled.BoxContent>
          <Styled.BoxForm>
            <Styled.Boxes>
              <Styled.Input placeholder={Placeholder_Name} type="text" />
              <Styled.Input placeholder={Placeholder_mail} type="mail" />
            </Styled.Boxes>
            <Styled.Boxes>
              <Styled.Button>{Button_Content}</Styled.Button>
            </Styled.Boxes>
          </Styled.BoxForm>
        </Styled.Box>
      </Styled.BoxFlex>
    </Styled.Contact>
  );
};

export default Contact;
