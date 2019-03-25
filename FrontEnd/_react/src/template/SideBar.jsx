import React from 'react';

const SideBar = props =>  {  
    return (
        <div className="col-md-4">
            {props.children}
        </div>
    );
}

export default SideBar;
