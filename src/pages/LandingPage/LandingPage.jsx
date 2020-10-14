// import { PromiseProvider } from 'mongoose';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';

const LandingPage = (props) => {
    return (
        <div className='LandingPage'>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>Motorcyle Routes Landing Page</h1>
            <p>Your journey starts here</p>
            <hr></hr>           
        </div>
    );
}

export default LandingPage;