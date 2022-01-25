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
            .then(data => setBooking(data))
    }, []);
    return (
        <div className='bb'>
           <table class="table table-striped mybooking">
                <thead>
                    <tr >
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
                   




                </tbody>
            </table>

        </div>
    );
};

export default Mybooking;