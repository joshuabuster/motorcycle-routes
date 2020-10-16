// import { PromiseProvider } from 'mongoose';
import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <h1>Motorcyle Routes Landing Page</h1>
            <hr></hr>
            <h3>Your Journey Starts Here</h3>
            <br></br>
            <Link className='btn btn-info' to='/login'>Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='btn btn-info' to='/signup'>Signup</Link>           
        </div>
    );
}

export default LandingPage;