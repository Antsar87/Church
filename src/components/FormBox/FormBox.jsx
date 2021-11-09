import React from 'react';

//Style
import * as Styled from './FormBox.styled';

//Data
import { Information } from './FormBoxData';

const FormBox = (props) => {
  return (
    <Styled.FormBox>
      <h2 className="title">{props.Information.title}</h2>
      <div className="Box">
        <form action="" className="Box__Form">
          {props.Information.inputInformation.map((item, idx) => (
            <div className="Box__Form--BoxInput" key={idx}>
              <label htmlFor={item.name} className="Box__Form--BoxInput__label">
                {item.label} :
              </label>
              <input
                type={item.type}
                key={idx}
                name={item.name}
                id={item.name}
                className="Box__Form--BoxInput__input"
              />
            </div>
          ))}
          <div className="Box__Form--Box">
            <div>
              <input
                id="check"
                name="check"
                type="checkbox"
                className="Box__Form--Box__CheckBox"
              />
              <label className="Box__Form--Box__text" htmlFor="check">
                {props.Information.check}
              </label>
            </div>
            <div>
              <p className="Box__Form--Box__text">
                {props.Information.content}
              </p>
            </div>
          </div>
          <button className="Box__Form--Submit">
            {props.Information.buttonContent}
          </button>
        </form>
        <div className="Box__Center">
          <p className="Box__Center--text">{Information.center}</p>
        </div>
        <div className="Box__Login">
          {Information.buttons.map(({ img, content, classname, id }) => (
            <button
              key={id}
              className={`Box__Login--Button Box__Login--${classname}`}
            >
              <div className="Box__Login--Button__Img"></div>
              <p>{content}</p>
            </button>
          ))}
          <p className="Box__Login--text">{props.Information.extraContent}</p>

          <p className="Box__Login--text">{props.Information.moreContent}</p>
          <button className=" Box__Login--link">
            {props.Information.link.content}
          </button>
        </div>
      </div>
    </Styled.FormBox>
  );
};

export default FormBox;
