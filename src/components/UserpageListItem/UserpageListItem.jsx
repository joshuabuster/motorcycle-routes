import './UserpageListItem.css';
import React from 'react';
import {Link} from 'react-router-dom';

function UserpageListItem ({route}) {
    return(
        <div>
            <h3>{route.name}</h3>
            <div>Distance: {route.miles} miles</div>
            <div>Rating: {route.rating}</div>
            <Link to={{pathname: '/details', state: {route}}}>More Details</Link>
        </div>
    )
}

export default UserpageListItem;