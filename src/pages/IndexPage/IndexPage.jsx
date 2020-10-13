import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './IndexPage.css';

const RoutesIndexPage = (props) => {
    return(
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <h1>Motorcycle Routes Index Page</h1>
            <p>list of all routes (pubic)</p>
            <hr></hr>
            <div className='routeList container'>
                {props.routes.map(route => 
                    <div className="individualRoute container">
                        {console.log(route)}
                        <h3>{route.name}</h3>
                        <div>Distance: {route.miles} miles</div>
                        <div>Rating: {route.rating}</div>
                        <Link to='/show/:id'>More Details</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RoutesIndexPage;
