import React from 'react';

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Feature from './Feature/Feature';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/feature' component={Feature} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;