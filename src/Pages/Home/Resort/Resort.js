import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Resort.css';

const Resort = () => {
    const [resort,setResort] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/resort`)
            .then(res => res.json())
            .then(data => setResort(data))
    }, []);



    return (
        <div id="resort">
            <h1>Explore Resort</h1>
            <Carousel className="carosolell">
  {
      resort.map(resort => 
      <Carousel.Item key={resort._id} interval={1000} className="single-slide">
       <div class="gg">
       <img
          className="slide-image"
          src={resort.img}
          alt="First slide"
        />
        <h3>{resort.name}</h3>
          <p>{resort.description}</p>
       </div>
        {/* <div class="">
        <h3>{resort.name}</h3>
          <p>{resort.description}</p>
        </div> */}
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>)
  }
  
</Carousel>
            
        </div>
    );
};

export default Resort;