import React from 'react';
import {Link} from 'react-router-dom';
import './RouteDetailCard.css';


function RouteCard({route, handleDeleteRoute}) { 
  return (
    <div className="container">
      <div className="detail-card">
        <h3>{route.name}</h3>
        <hr></hr>
          <dt>Start Point:</dt>
          <dd>{route.startPoint}</dd>
          <dt>End Point:</dt>
          <dd>{route.endPoint}</dd>
          <dt>Distance:</dt>
          <dd>{route.miles} miles</dd>
          <dt>Difficulty:</dt>
          <dd>{route.difficulty}</dd>
          <dt>Rating:</dt>
          <dd>{route.rating}</dd>
          <hr></hr>
        <div className="button-footer">
        <Link className="btn btn-primary" to='/userpage'>Back to Userpage</Link>
        &nbsp;&nbsp;
        <Link className="btn btn-info" to={{pathname:'/edit', state: {route}}}>Edit</Link>
        &nbsp;&nbsp;
        <button className='btn btn-danger' onClick={() => handleDeleteRoute(route._id)}>Delete</button>
        </div>
      </div>
      <div className="detail"></div>
    </div>
  );
}

export default RouteCard;