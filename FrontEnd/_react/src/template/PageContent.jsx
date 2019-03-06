import React from 'react';

const PageContent = props => {
  return (
  <div className="container">
    {props.children}
  </div>
  );
}

export default PageContent;