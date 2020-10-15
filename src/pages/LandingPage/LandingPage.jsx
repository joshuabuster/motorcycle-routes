// import { PromiseProvider } from 'mongoose';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {Link} from 'react-router-dom';
import './LandingPage.css';

const LandingPage = (props) => {
    return (
        <div className='LandingPage'>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>Motorcyle Routes Landing Page</h1>
            <br></br>
            <h3>Your journey starts here</h3>
            <br></br>
            <Link className='btn btn-info' to='/login'>Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='btn btn-info' to='/signup'>Signup</Link>
            <hr></hr>           
        </div>
    );
}

export default LandingPage;