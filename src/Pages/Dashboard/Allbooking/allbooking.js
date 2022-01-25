import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './allbooking.css';
const Allbooking = () => {
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-plains-48362.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);
    const deleteBooking = id => {

        const proceed = window.confirm('Are You sure to delete?')
        if(proceed ){
            fetch(`https://sleepy-plains-48362.herokuapp.com/booking/${id}`, { method: "DELETE" }
        )
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    alert("Booking Deeleted succesfully");
                    const newSBooking = booking.filter(booking => booking._id != id);
                    setBooking(newSBooking);
                }
            })
        }
    };
    const handleapprove = id => {
        const updatedBooking = booking;
        updatedBooking.status = 'approved';
        fetch(`https://sleepy-plains-48362.herokuapp.com/booking/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBooking)
        }).then(
            alert("Approved.")
        )

    };

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
                        <th scope="col">APPROVAL</th>
                        <th scope="col">Action</th>
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
                            
                            <td>
                                    <button className='btn btn-primary booking' >Approve</button>
                                </td>
                            <td><button className="btn btn-danger" onClick={() => deleteBooking(book._id)} >Cancel</button></td>

                        </tr>)
                    }





                </tbody>
            </table>


        </div>
    );
};

export default Allbooking;