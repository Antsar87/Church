import React from 'react';

//Images
import watch from '../../images/Icon/Icon_Header/HORLOGE.png';

//Style

import * as Styled from './EnseignementBox.style';

const EnseignementBox = ({
  img,
  type,
  title,
  description,
  photo,
  name,
  date,
  box,
}) => {
  return (
    <Styled.MainBox box={box}>
      <div className="boxImg">
        <img src={img} alt="enseignement" />
      </div>
      <div className="boxContent">
        <h3 className="type">{type}</h3>
        <h2>{title}</h2>
        {description && <p>{description}</p>}

        <div className="boxFlex">
          <div className="boxFlex__child">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
          </div>
          <div className="boxFlex__child">
            <img src={watch} alt={name} />
            <h3>{date}</h3>
          </div>
        </div>
      </div>
    </Styled.MainBox>
  );
};

export default EnseignementBox;
