import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import IndexListItem from '../../components/IndexListItem/IndexListItem';
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
                    <IndexListItem
                        route={route}
                        key={route._id}
                        handleAddToQueue={props.handleAddToQueue}
                        handleRemoveFromQueue={props.handleRemoveFromQueue}
                        user={props.user}
                    />
                )}
            </div>
        </div>
    )
}

export default RoutesIndexPage;
