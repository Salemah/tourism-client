import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Addnewpackege from '../AddnewPackege/Addnewpackege';
import Allbooking from '../Allbooking/allbooking';
import Mybooking from '../Mybooking/Mybooking';
import './dashboard.css';

const Dashboard = () => {

    const [state, setState] = useState("Allbooking");
    return (
        <div className='dashboard'>
            <Container>
  <Row className='left-columm'>
    <Col sm={2} className='columm' >
        <div class=" left-button ">
            <button className='btn btn-danger' onClick={() => setState("Addnewpackege")}>Addnewpackege</button>
            <button className='btn btn-danger' onClick={() => setState("Allbooking")}>Allbooking</button>
            <button className='btn btn-danger' onClick={() => setState("Mybooking")}>Mybooking</button>
            
        </div>
    

    </Col>
    <Col sm={10} className="right-columm">
        <div >
              {state === "Allbooking" && <Allbooking></Allbooking>}
              {state === "Mybooking" && <Mybooking></Mybooking>}
              {state === "Addnewpackege" && <Addnewpackege></Addnewpackege>}
            </div></Col>
    
  </Row>
  
</Container>
        </div>
    );
};

export default Dashboard;
