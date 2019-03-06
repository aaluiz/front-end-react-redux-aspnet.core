import React from 'react';  
import ItemsListContainer from '../containers/ItemsListContainer';
import Navigation from '../template/Navigation';
import Header from '../template/Header';

const App = () => {
    return (
      <div>
        <Navigation />
        <Header/>
        <ItemsListContainer />
      </div>
    );
  };

  export default App;