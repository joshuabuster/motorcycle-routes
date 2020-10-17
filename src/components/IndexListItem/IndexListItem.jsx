import './IndexListItem.css';
import React from 'react';

function IndexListItem (props) {
    return(
        <div className="container">
            <div className="individualRoute">
                <h3>{props.route.name}</h3>
                <hr></hr>
                <div><b>Distance:</b> {props.route.miles} miles</div>
                <div><b>Start Point:</b> {props.route.startPoint}</div>
                <div><b>End Point:</b> {props.route.endPoint}</div>
                <div><b>Difficulty:</b> {props.route.difficulty}</div>
                <div><b>Rating:</b> {props.route.rating}</div>
                <br></br>
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
        </div>
    )
}

export default IndexListItem;