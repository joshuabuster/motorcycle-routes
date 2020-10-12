import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './RoutesIndexPage.css';

const RoutesIndexPage = (props) => {
    return(
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>Motorcycle Routes Index Page</h1>
            <h3>Route: PCH</h3>
            <h3>Route: Rock Store</h3>
            <h3>Route: Newcomb's Ranch</h3>
        </div>
    )
}

export default RoutesIndexPage;