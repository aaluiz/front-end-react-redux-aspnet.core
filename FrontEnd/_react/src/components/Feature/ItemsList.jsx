import React from 'react';  
import Input from './Input';
import Item from './Item';

export default props => {
    return (
      <div>
        <Input onAdd={props.onAdd} />
        {props.items.map((item, index) => {
          return (
            <Item key={index}
              onDelete={props.onDelete}
              index={index}
              name={item.name}
              price={item.price }
            />
          );
        })}
        <br/>
      </div>
    );
  };

