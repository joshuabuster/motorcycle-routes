import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RoutesIndexPage.css';

class RoutesIndexPage extends Component {
    render(){
        return(
            <div>
                <Link to='/'>Home</Link>
                <h1>Motorcycle Routes Index Page</h1>
                <h3>Route: PCH</h3>
                <h3>Route: Rock Store</h3>
                <h3>Route: Newcomb's Ranch</h3>
            </div>
        )
    }
}

export default RoutesIndexPage;