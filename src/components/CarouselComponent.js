import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'; // Optional: for additional styling

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-content">
          <p className="quote-text">"The only limit to our realization<br></br> of tomorrow is our doubts of today."</p>
          <footer className="quote-author">- Franklin D. Roosevelt</footer>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <p className="quote-text">"In the end, we will remember not<br></br> the words of our enemies, but the silence of our friends."</p>
          <footer className="quote-author">- Martin Luther King Jr.</footer>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content">
          <p className="quote-text">"The best way to predict<br></br> the future is to invent it."</p>
          <footer className="quote-author">- Alan Kay</footer>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
