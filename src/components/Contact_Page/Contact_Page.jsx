///Style
import { Fragment } from 'react';
import Contact from '../Contact/Contact';
import * as Styled from './Contact_Page.styled';

///Data
import { Contacts, Form } from './Contact_PageData';

const ContactPage = () => {
  return (
    <Styled.Contact>
      <div className="Box__Img">
        <div className="Box__Img--Back" />
      </div>

      {/* Container */}
      <div className="Container">
        {/* Form */}
        <form className="Form">
          <h2 className="Form__Title">{Form.title}</h2>
          {Form.input.map(({ classReact, id, placeholder, type }) => (
            <Fragment key={id}>
              {classReact === 'input' ? (
                <input
                  placeholder={placeholder}
                  type={type}
                  className={`Form__box Form__${classReact}`}
                />
              ) : (
                <textarea
                  placeholder={placeholder}
                  type={type}
                  className={`Form__box Form__${classReact}`}
                />
              )}
            </Fragment>
          ))}
          <button className="Form__Button">{Form.buttonContent}</button>
        </form>
        {/* Form */}

        {/* CONTACTS */}
        <div className="Contacts">
          {Contacts.map((item) => (
            <div className="Contacts__Box" key={item.id}>
              <h2 className={`Contacts__Box--title ${item.self}`}>
                {item.title}
              </h2>
              {item.content && (
                <p className="Contacts__Box--content">{item.content}</p>
              )}
              {item.logo && (
                <ul className="Contacts__Box--LinksBox">
                  {item.logo.map((item, idx) => (
                    <li key={idx}>
                      <a
                        className="Contacts__Box--LinksBox__link"
                        href={item.link}
                      >
                        <img src={item.src} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {/* CONTACTS */}
      </div>
      {/* Container */}
      <Contact />
    </Styled.Contact>
  );
};

export default ContactPage;
