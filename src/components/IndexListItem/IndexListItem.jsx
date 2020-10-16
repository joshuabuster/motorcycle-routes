import './IndexListItem.css';
import React from 'react';

function IndexListItem (props) {
    return(
        <div className="individualRoute container">
            <h3>{props.route.name}</h3>
            <div>Distance: {props.route.miles} miles</div>
            <div>Start Point: {props.route.startPoint}</div>
            <div>End Point: {props.route.endPoint}</div>
            <div>Difficulty: {props.route.difficulty}</div>
            <div>Rating: {props.route.rating}</div>
            {/* !user logged in ? show empty div : show buttons */}
            {
                props.user ? 
                    <div>
                        {/* route not in users queue ? show Add : show REMOVE*/}
                        <button className="btn btn-success" onClick={() => props.handleAddToQueue(props.route._id)} disabled={props.route.subscribedUsers.includes(props.user._id)}>Add To Your Queue</button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => props.handleRemoveFromQueue(props.route._id)}>Remove From Queue</button>
                    </div>
                :
                    <></>
            }
        </div>
    )
}

export default IndexListItem;