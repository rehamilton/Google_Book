import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'




function App() {

  
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path = {['/', '/search']}>
            <Search />
          </Route>
          {/* <Route exact path ='/books/:id'>
            <Detault />
          </Route> */}
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
