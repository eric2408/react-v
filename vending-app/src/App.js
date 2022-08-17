import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/sardines">
            <Sardines />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
