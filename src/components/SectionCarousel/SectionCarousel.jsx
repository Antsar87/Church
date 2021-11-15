import React from 'react';

///Importing Arrows
import ArrowL from '../../images/Arrows/ArrowLeftSection.png';
import ArrowR from '../../images/Arrows/ArrowRightSection.png';


///Style
import * as Styled from './SectionCarousel.Style';

///Data
const SectionCarousel = ({ InformationCarousel, className}) => {

  return (
    <Styled.Carousel className={className}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {InformationCarousel.map(({ active }, idx) => {
            return (
              <button
                key={idx}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={`${idx}`}
                className={`${active} circle`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {InformationCarousel.map(({ photo, content, active }, idx) => (
            <div className={`carousel-item ${active}`} key={idx}>
              <img src={photo} className="d-block w-100" alt="" />
              <div className="carousel-caption d-none d-md-block">
                <div className="back" />
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <Styled.Box>
            <img src={ArrowL} alt="Left" className="ArrowLeft" />
          </Styled.Box>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <Styled.Box>
            <img src={ArrowR} alt="Next" className="ArrowRight" />
          </Styled.Box>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Styled.Carousel>
  );
};

export default SectionCarousel;
