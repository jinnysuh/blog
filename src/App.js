import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Watch from './containers/Watch';
import SocialMedia from './containers/SocialMedia';
import AboutME from './containers/AboutME';
import Pictures from './containers/Pictures';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Watch" component={Watch} />
          <Route path="/SocialMedia" component={SocialMedia} />
          <Route path="/AboutME" component={AboutME} />
          <Route path="/Pictures" component={Pictures} />
        </Switch>
      </div>
    );
  }
}

export default App;
