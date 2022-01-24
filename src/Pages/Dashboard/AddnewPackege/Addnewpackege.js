import React from "react";

import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/UseAuth";
import './addnewpackege.css';


const Addnewpackege = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("http://localhost:5000/addpackege", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(packege => {
                if(packege.insertedId){
                    alert("Packege added succfull");
                    reset();
                }
            });
        
    };
    return (
        <div className="add">
            <h1 className="mt-5 text-center text-info">Please Add Events</h1>
            
                    <div className="addpackege-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Packege-Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price")}
                                // placeholder="Name"
                                type="number"
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("Day", { required: true })}
                                placeholder="day"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            
                          

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
           
    );
};

export default Addnewpackege;