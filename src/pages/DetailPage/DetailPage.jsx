import React from 'react';
import './DetailPage.css';
import RouteCard from '../../components/RouteCard/RouteCard';

function DetailPage(props) {
  const route = props.location.state.route;
  return (
    <div>
      <h1>Route Details</h1>
      <RouteCard
        key={route._id}
        route={route}
      />
    </div>
  );
}

export default DetailPage;   