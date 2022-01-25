import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Addnewpackege from '../AddnewPackege/Addnewpackege';
import Addresort from '../AddResort/addresort';
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
            <button className='btn btn-danger' onClick={() => setState("Addnewpackege")}>Addpackege</button>
            <button className='btn btn-danger' onClick={() => setState("Allbooking")}>Allbooking</button>
            <button className='btn btn-danger' onClick={() => setState("Mybooking")}>Mybooking</button>
            <button className='btn btn-danger' onClick={() => setState("Addresort")}>Addresort</button>
            
        </div>
    

    </Col>
    <Col sm={10} className="right-columm">
        <div >
              {state === "Allbooking" && <Allbooking></Allbooking>}
              {state === "Mybooking" && <Mybooking></Mybooking>}
              {state === "Addnewpackege" && <Addnewpackege></Addnewpackege>}
              {state === "Addresort" && <Addresort></Addresort>}
            </div></Col>
    
  </Row>
  
</Container>
        </div>
    );
};

export default Dashboard;
