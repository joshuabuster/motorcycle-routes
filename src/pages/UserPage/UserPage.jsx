import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './UserPage.css';

const UserPage = (props) => {
    return(
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>{props.user.name.toUpperCase()}'S PERSONAL PAGE</h1>
            <h2>Your Routes:</h2>
            <h3>Route: PCH</h3>
            <h3>Route: Rock Store</h3>
            <h3>Route: Newcomb's Ranch</h3>
        </div>
    )
    
}

export default UserPage;