import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CSS/Carousels.css';

function CarouselF(props) {
  return (
    <div className="Ccarousel-container">
      <Carousel className="Ccarousel">
        {props.BlogData.map((arr) => (
          <Carousel.Item key={arr.title} className="Ccarousel-item">
            <div className="Ccarousel-image-container">
              <img className="Ccarousel-image" src={arr.src} alt="Carousel" />
              <div className="Ccarousel-content">
                <h3 className="Ccarousel-title">{arr.title}</h3>
                <p className="Ccarousel-description">{arr.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselF;
