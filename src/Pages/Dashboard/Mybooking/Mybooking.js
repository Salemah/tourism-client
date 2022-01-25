import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import './mybooking.css';

const Mybooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useAuth();
   
    useEffect(() => {
        fetch(`https://sleepy-plains-48362.herokuapp.com/mybooking/${user.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [user.email])
    return (
        <div className='bb'>
           <p>{booking.price
}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed nobis repudiandae recusandae vero praesentium magni odio, sequi architecto officiis.</p>
            <p>{booking.length}</p>
        </div>
    );
};

export default Mybooking;