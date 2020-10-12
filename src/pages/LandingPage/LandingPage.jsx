import { PromiseProvider } from 'mongoose';
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';

const LandingPage = (props) => {
    return (
        <div className='LandingPage'>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>Motorcyle Routes</h1>
            <p>Your journey starts here</p>
        </div>
    );
}

export default LandingPage;