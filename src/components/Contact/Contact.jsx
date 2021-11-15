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
const Contact = ({column, className}) => {
  return (
    <Styled.Contact className={className} column={column}>
      <Styled.BoxFlex column={column}>
        <Styled.Box column={column}>
          <Styled.BoxContent column={column}>
            <h3>{title}</h3>
            <p>{content}</p>
          </Styled.BoxContent>
          <Styled.BoxForm column={column}> 
            <Styled.Boxes column={column}>
              <Styled.Input placeholder={Placeholder_Name} type="text" />
              <Styled.Input placeholder={Placeholder_mail} type="mail" />
            </Styled.Boxes>
            <Styled.Boxes>
              <Styled.Button column={column}>{Button_Content}</Styled.Button>
            </Styled.Boxes>
          </Styled.BoxForm>
        </Styled.Box>
      </Styled.BoxFlex>
    </Styled.Contact>
  );
};

export default Contact;
