import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Navbar from './components/Nav'
import Saved from './pages/Saved'


function App() {

  
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path = {['/', '/search']}>
            <Search />
          </Route>
          <Route exact path ='/saved'>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
