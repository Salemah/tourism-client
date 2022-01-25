import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Resort.css';

const Resort = () => {
    const [resort,setResort] = useState([])
    useEffect(() => {
        fetch(`https://sleepy-plains-48362.herokuapp.com/resort`)
            .then(res => res.json())
            .then(data => setResort(data))
    }, []);



    return (
        <div id="resort">
            <h1>Explore Resort</h1>
            <Carousel className="carosolell">
  {
      resort.map(resort => 
      <Carousel.Item key={resort._id} interval={1000} className="single-slide" onclick="">
       <div class="gg">
       <img
          className="slide-image"
          src={resort.img}
          alt="First slide"
        />
        <h3>{resort.name}</h3>
          <p>{resort.description}</p>
          <Link to={`/resortbooking/${resort._id}`}>
                                    <button className='btn btn-primary booking' >Booking</button>
                                </Link>
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