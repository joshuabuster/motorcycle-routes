// import { PromiseProvider } from 'mongoose';
import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="container">
            <div className='landing-page'>
                <h1>Motorcyle Routes Tracker</h1>
                <hr></hr>
                <h3>Your Journey Starts Here</h3>
                <br></br>
                <Link className='btn btn-info' to='/login'>Login</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className='btn btn-info' to='/signup'>Signup</Link> 
            </div>          
        </div>
    );
}

export default LandingPage;