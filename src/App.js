import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;
