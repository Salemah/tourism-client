import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './lastsection.css';

const Lastsectin = () => {
    return (
        <Container fluid className='middle-body'>
  <Row>
    <Col sm={4}>
<img className='image-left' src="https://i.ibb.co/tX0gDCQ/river-Clean.png" alt=""/>

    </Col>
    <Col sm={8}>
    <Accordion className='right-section'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Why Choose us?</Accordion.Header>
    <Accordion.Body>
    Compare Hundreds of Sites. Find the Best travel  Deals to Fit Your Budget Now! 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Why Choose us?</Accordion.Header>
    <Accordion.Body>
    Compare Hundreds of Sites. Find the Best travel  Deals to Fit Your Budget Now! 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Why Choose us?</Accordion.Header>
    <Accordion.Body>
    Compare Hundreds of Sites. Find the Best travel  Deals to Fit Your Budget Now! 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </Col>
  </Row>
 </Container>
    );
};

export default Lastsectin;