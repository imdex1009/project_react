import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import GamePage from './Pages/GamePage'

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            {/* <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/queue">
              <Queue />
            </Route> */}
            <Route exact path="/">
              <GamePage />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>  
  );
};

export default App;
