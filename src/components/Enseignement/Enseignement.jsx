import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Title from '../../utility/Title/Title';
import EnseignementBox from '../EnseignementBox/EnseignementBox';
import { Button } from '../../utility/Button/Button';

//Style
import * as Styled from './Enseignement.style';

//Data
import {
  title,
  Information_Main_Box,
  Information_Secondary_Box,
} from './EnseignementData';

const Enseignement = () => {
  return (
    <Styled.Enseignement id="enseignement">
      <Title paint={(props) => props.theme.pinkDark}>{title}</Title>
      <Styled.BoxFlex>
        <div>
          <EnseignementBox {...Information_Main_Box} box="main" />
        </div>
        <div>
          {Information_Secondary_Box.map((item, idx) => (
            <EnseignementBox {...item} key={idx} box="secondary" />
          ))}
          <Link to="/enseignement">
            <Button
              type="secondary-DarkPink"
              style={{ display: 'block', marginTop: '3rem', textAlign: 'center', width: "100%" }}
            >
              voir plus
            </Button>
          </Link>
        </div>
      </Styled.BoxFlex>
    </Styled.Enseignement>
  );
};

export default Enseignement;
