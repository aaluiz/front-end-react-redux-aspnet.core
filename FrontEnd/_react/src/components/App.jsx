import React from 'react';  
import ItemsListContainer from '../containers/ItemsListContainer';
import Navigation from '../template/Navigation';

const App = () => {
    return (
      <div>
        <Navigation />
        <ItemsListContainer />
      </div>
    );
  };

  export default App;