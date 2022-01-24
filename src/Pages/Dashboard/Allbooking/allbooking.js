import React, { useEffect, useState } from 'react';
import './allbooking.css';
const Allbooking = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div className='allbooking-container'>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Packege</th>
                        <th scope="col">Price</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        booking.map(book => <tr key={book._id}>
                            <td>{book.username}</td>
                            <td>{book.email}</td>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.phone}</td>
                            <td>{book.status}</td>

                        </tr>)
                    }
                    {/* <th scope="row">1</th> */}




                </tbody>
            </table>


        </div>
    );
};

export default Allbooking;