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
            <hr></hr>
            <div className='routeList container'>
                {props.routes.map(route => 
                    <div className="individualRoute container">
                        <h3>Name: {route.name}</h3>
                        <div>Start Point: {route.startPoint}</div>
                        <div>End Point: {route.endPoint}</div>
                        <div>Distance: {route.distance} miles</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RoutesIndexPage;
