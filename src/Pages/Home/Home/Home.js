import React from 'react';
import Banner from '../Banner/Banner';
import Lastsectin from '../LastSection/Lastsectin';
import Packege from '../Packege/Packege';
import Resort from '../Resort/Resort';

const Home = () => {
    return (
        <div id="home">
            <h1>thi sis home</h1>
            <Banner></Banner>
            <Packege>  </Packege>
            <hr/>
            <Resort></Resort>
            <hr/>
            <Lastsectin></Lastsectin>
        </div>
    );
};

export default Home;