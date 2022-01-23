import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packege.css';
const Packege = () => {
    const [packege, setPackege] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packege')
            .then(res => res.json())
            .then(data => {
                setPackege(data);
            })



    }, [])
    return (
        
            <Container fluid id="event" className='mt-5' id="packege">

                <Row p-3 >
                <h1>Our Current Packages</h1>
                    {
                        packege.map(packege => 
                        <Col xs={6} lg={4} md={4}  key={packege._id} >
                            <div class=""id='packege-columm'>
                            <img id="imgg" src={packege.img} alt=""/>
                            <h1 id="h1text">{packege.name}</h1>
                            <p>{packege.description}</p>
                            <p>{packege.Day}</p>
                            <span className="icon"><i class="far fa-calendar  "></i>  {packege.price}</span><br/>
                            <Link to={`/booking/${packege._id}`}>
                    <button className='btn btn-primary booking' >Booking</button>
            </Link>
                            </div>
                            


                            
                            </Col> )
                    }
                   

                </Row>
            </Container>
       
    );
};

export default Packege;