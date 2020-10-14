import './IndexListItem.css';
import React from 'react';

function IndexListItem ({route}) {
    return(
        <div className="individualRoute container">
            {console.log(route)}
            <h3>{route.name}</h3>
            <div>Distance: {route.miles} miles</div>
            <div>Start Point: {route.startPoint}</div>
            <div>End Point: {route.endPoint}</div>
            <div>Difficulty: {route.difficulty}</div>
            <div>Rating: {route.rating}</div>
            <button>Add To Your Queue</button>
        </div>
    )
}

export default IndexListItem;