import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-400 "
      src="https://i.ibb.co/GMPr72W/Discount-Travel.png"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3 className="beanner-header">Stay Safe HAPPY TRAVEL</h3>
      <p className="beanner-text">May angels fly with you wherever you roam and guide you back safely to family and home.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-400 "
      src="https://i.ibb.co/jkggqdL/travel-world.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="beanner-header">The journey of a thousand miles begins with a single step.
</h3>
      <p className="beanner-text">May your journey be eye-opening!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100  h-400"
      src="https://i.ibb.co/1sXrZ0J/photodune-512367-longtail-boats-at-maya-bay-m-940x600.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="beanner-header">Wishing you a safe journey and a relaxing vacation when you arrive!</h3>
      <p className="beanner-text">Wishing you a safe journey and a relaxing vacation when you arrive!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;