import React from 'react';

const Card = props => {
    return (
        <div className="card my-4">
          <h5 className="card-header">{props.title}</h5>
          <div className="card-body">
            {props.children}
          </div>
        </div>
    );
}

export default Card;