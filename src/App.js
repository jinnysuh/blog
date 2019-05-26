import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Watch from './containers/Watch';
import SocialMedia from './containers/SocialMedia';
import AboutME from './containers/AboutME';
import Pictures from './containers/Pictures';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="App">
        <Navbar location={this.props.location} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutME" component={AboutME} />
          <Route path="/Watch" component={Watch} />
          <Route path="/SocialMedia" component={SocialMedia} />
          <Route path="/Pictures" component={Pictures} />
        </Switch>
      </div>
    );
  }
}

export default App;
