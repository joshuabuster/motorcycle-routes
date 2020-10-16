import React from 'react';
import IndexListItem from '../../components/IndexListItem/IndexListItem';
import './IndexPage.css';

const RoutesIndexPage = (props) => {
    return(
        <div>
            <h1>Motorcycle Routes Index Page</h1>
            <p>list of all routes (pubic)</p>
            <hr></hr>
            <div>
                {props.routes.map(route => 
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
    )
}

export default RoutesIndexPage;
