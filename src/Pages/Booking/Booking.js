import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hook/UseAuth";
import './Booking.css';

const Booking = () => {
  const { id } = useParams();
  const {user}  = useAuth();
  const [service, setService] = useState({});
 
  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();




  useEffect(() => {
    fetch(`https://sleepy-plains-48362.herokuapp.com/packege/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  const onSubmit = data => 
{
  
  fetch(`https://sleepy-plains-48362.herokuapp.com/booking`, {
     method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
       .then((res) => res.json())
      .then((result) => {
         console.log(result);
        if (result.insertedId) {
           alert("order processed successfully");
            reset();
        }
      });
   

  //     e.preventDefault();
};

  return (

 <div class="bb">
      <Container className="mt-5  ">
      <Row className="conatilener-box ">
        <Col sm={4}>
          <div className="border p-3">
            <h3>Packege Description</h3>
            <img className="img-fluid" src={service.img} alt="" />
            <h3>Title: {service.name}</h3>
            <p>Description: {service.description}</p>
            <h5>Price: ${service.price}</h5>
          </div></Col>
        <Col sm={8}><div className=" p-3 ">
          <h2>Please Confirm Your Booking</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
           
            <input Value={service?.name} {...register("name")} /><br/>
            <input Value={service?.price} {...register("price")} /><br/>
            <input Value={user?.displayName} {...register("username")} /><br/>
            <input Value={user?.email} {...register("email")} /><br/>
            <input placeholder="Address" {...register("address")} /><br/>
            <input value="pending" {...register("status")} /><br/>
            <input placeholder="Number"{...register("phone")} /><br/>

            <input className="btn btn-primary" type="submit" />
          </form>

        </div>
        </Col>
      </Row>

    </Container>
 </div>


  );
};

export default Booking;

