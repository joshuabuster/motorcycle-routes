import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserPage.css';

class UserPage extends Component {
    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
                <h1>User Page</h1>
                <h2>Your Routes:</h2>
                <h3>Route: PCH</h3>
                <h3>Route: Rock Store</h3>
                <h3>Route: Newcomb's Ranch</h3>
            </div>
        )
    }
}

export default UserPage;