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
    const deleteBooking = id =>{
       
        fetch(`https://sleepy-plains-48362.herokuapp.com/booking/${id}`,{method:"DELETE"}
        )
        .then(res => res.json())
           .then(result=> 
            {
                if(result.deletedCount>0){
                    alert("Booking Deeleted succesfully");
                    const newSBooking = booking.filter(booking=>booking._id != id);
                    setBooking(newSBooking);


            }})
  

};
    return (
        <div className='bb'>
           <table class="table table-striped mybooking"  >
                <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Packege</th>
                        <th scope="col">Price</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
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
                            <td><button className="btn btn-danger"onClick={()=>deleteBooking(book._id)} >Delete</button></td>

                        </tr>)
                    }
                   




                </tbody>
            </table>

        </div>
    );
};

export default Mybooking;