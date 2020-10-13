import React from 'react';
import {Link} from 'react-router-dom';


function RouteCard({route}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{route.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Start Point</dt>
          <dd>{route.startPoint}</dd>
          <dt>End Point</dt>
          <dd>{route.endPoint}</dd>
          <dt>Distance</dt>
          <dd>{route.miles} miles</dd>
          <dt>Difficulty</dt>
          <dd>{route.difficulty}</dd>
          <dt>Rating</dt>
          <dd>{route.rating}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/index'>Back to Routes</Link>
      </div>
    </div>
  );
}

export default RouteCard;