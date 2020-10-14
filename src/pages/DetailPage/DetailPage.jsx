import React from 'react';
import './DetailPage.css';
import RouteDetailCard from '../../components/RouteDetailCard/RouteDetailCard';

function DetailPage(props) {
  const route = props.location.state.route;
  return (
    <div>
      <h1>Route Details</h1>
      <RouteDetailCard
        key={route._id}
        route={route}
        handleDeleteRoute={props.handleDeleteRoute}
      />
    </div>
  );
}

export default DetailPage;   