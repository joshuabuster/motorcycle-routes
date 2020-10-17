import './UserpageListItem.css';
import React from 'react';
import {Link} from 'react-router-dom';

function UserpageListItem ({route}) {
    return(
        <div className="container">
            <div className="userpage-item">
                <h3 className="route-name">{route.name}</h3>
                <hr></hr>
                <div><b>Distance:</b> {route.miles} miles</div>
                <div><b>Rating:</b> {route.rating}</div>
                <br></br>
                <Link className="btn btn-primary" to={{pathname: '/details', state: {route}}}>More Details</Link>
            </div>
        </div>
    )
}

export default UserpageListItem;