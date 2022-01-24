import React, { useEffect, useState } from 'react';

const Mybooking = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Mybooking;