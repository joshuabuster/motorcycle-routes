import React from 'react';
import { Link } from 'react-router-dom';
import IndexListItem from '../../components/IndexListItem/IndexListItem';
import NavBar from '../../components/NavBar/NavBar';
import UserpageListItem from '../../components/UserpageListItem/UserpageListItem';
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
                {props.userRoutes.map(route => 
                    <UserpageListItem
                        route={route}
                        key={route._id}
                    />
                )}
            </div>
            <br></br>
            <Link to="/add" className='btn btn-primary'>ADD NEW ROUTE</Link>
            <br></br>
            <br></br>
            <h2>Routes in your Queue:</h2>
            <div>
                <div>
                    {props.queuedRoutes.map(route => 
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
        </div>
    )
    
}

export default UserPage;