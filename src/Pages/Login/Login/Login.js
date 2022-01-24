import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../Hook/UseAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home#home';
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    };
    const onSubmit = data => console.log(data);
    return (

        <Container className="login-container ">
            <h1>SAT TRAVEL</h1>
            <Row>
                <Col sm={6}>
                    <img id="left-img" src="https://i.ibb.co/vzzPz8H/t-EQz4g-X9-WPP4gc3p-Pcem-WOzyc-W8-Vt-KJRp16z-B6-U6.jpg" alt="" />

                </Col>
                <Col sm={6}>
                <h2>Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input placeholder='Email' {...register("email")} />

                       
                        <input placeholder='Password' {...register("password", { required: true })} /> <br/>
                        
                        {errors.password&& <span>This field is required</span>}

                        <input type="submit" />
                    </form>

                    <div class="google-signin">
                    <h3> OR </h3>
                    <button onClick={handleGoogleLogin} className="btn btn-warning"><i class="fab fa-google icon-gogle"></i> <i class="fas fa-caret-right"></i> Google Sign In</button>
                    </div>

                </Col>
            </Row>
        </Container>

    );
};

export default Login;