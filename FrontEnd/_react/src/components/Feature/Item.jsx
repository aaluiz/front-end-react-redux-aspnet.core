import React from 'react';  

const Item = props => {
    return (
      <div key={props.index}>
        <div>
          Item : {props.name} || Price: {props.price}
        </div>
        <button onClick={() => props.onDelete(props.index)}>Delete</button>
      </div>
    );
  };

  export default Item;