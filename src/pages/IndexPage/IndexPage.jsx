import React from 'react';
import IndexListItem from '../../components/IndexListItem/IndexListItem';
import './IndexPage.css';

const RoutesIndexPage = (props) => {
    return(
        <div className="container">
            <div className="index-page">
                <h1>Motorcycle Routes Index Page</h1>
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
        </div>
    )
}

export default RoutesIndexPage;
