import React from 'react';

import { social } from './EnseignementPageSocialData';

const EnseignementPageSocial = (props) => {
  return (
    <div className={props.className}>
      <p className="Box__text">{social.name}</p>
      {social.logo.map((item, idx) => (
        <img src={item.src} alt="" key={idx} />
      ))}
    </div>
  );
};

export default EnseignementPageSocial;
