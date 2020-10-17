// import { PromiseProvider } from 'mongoose';
import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="container">
            <div className='landing-page'>
                <h1 className="welcome">Your Journey Starts Here</h1>
                <br></br>
                <Link className='btn btn-default' to='/login'>Login</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='btn btn-default' to='/signup'>Signup</Link> 
            </div>          
        </div>
    );
}

export default LandingPage;