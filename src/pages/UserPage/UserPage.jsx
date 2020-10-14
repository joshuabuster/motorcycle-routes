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
            <hr></hr>
            <h2>Your Routes:</h2>
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
            <br></br>
            <Link to="/add" className='btn btn-primary'>ADD NEW ROUTE</Link>
            <br></br>
            <br></br>
            <h2>Routes in your Queue:</h2>
            <div>
                <div>
                    <h3>None Yet</h3>
                </div>
            </div>
        </div>
    )
    
}

export default UserPage;