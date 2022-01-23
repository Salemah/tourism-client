import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../Hook/UseAuth';


const Login = () => {
   const {signInUsingGoogle} = useAuth();
   const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home#home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;