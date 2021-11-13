import React from 'react';


//Style
import * as Styled from "./Recherche.style"
import { inputData, srcIconSearch } from './RechercheData';

//Data 


const Recherche = (props) => {
  return (
    <Styled.Form paint={props.paint} className={`${props.className}`}>
      <Styled.Submit >
        <img src={srcIconSearch} alt="Recherche" />
      </Styled.Submit>
      <Styled.Input {...inputData} />
    </Styled.Form>
  );
};

export default Recherche;
