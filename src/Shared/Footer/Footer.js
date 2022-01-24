import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
    return (
        <Container fluid className='footer-container'>

  <Row>
    <Col sm={4}>
        <img id="footer-img" src="https://i.ibb.co/fDw54nh/people-finance-around-the-world-logo.png" alt=""/></Col>
    <Col  sm={4} >
        
        <h1 className='header'>CONTACT INFORMATION</h1>
        <p>602,ROAD-2</p>
        <p>BASHUNDHARA R/A</p>
        <p>O19888880</p>

        
        </Col>
    <Col sm={4} >
        <h1 className='header'>SITEMAP</h1>
        <p>Package</p>
        <p>Resort</p>
        <p>Contact Us</p>
        <p>About Us</p>



        
        </Col>
  </Row>
</Container>
    );
};

export default Footer;