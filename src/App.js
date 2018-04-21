import React, {Component} from 'react';
import './App.css';
import Header from './containers/Header';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Watch from './containers/Watch';
import SocialMedia from './containers/SocialMedia';
import Game from './containers/Game'
import AboutME from './containers/AboutME';
import Pictures from './containers/Pictures';
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.req = window.requestAnimationFrame(this.appUpdateFrame)
  }

  //Call to store to update the frame
  appUpdateFrame = () => {

    this.props.updateFrame(); //this will trigger mobx to update the view when observable value change

    this.req = window.requestAnimationFrame(this.appUpdateFrame) //rerun this function again when browser is ready to update new frame

  }

  render() {
    return (
      <div className="App">
   
        <Navbar />
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Watch" component={Watch} />
          <Route path="/SocialMedia" component={SocialMedia} />
          <Route path="/Game" component={() => <Game store={this.props.store} game={this.props.game} />} />
          <Route path="/AboutME" component={AboutME} />
          <Route path="/Pictures" component={Pictures} />
        </Switch>
      </div>
    );
  }
}

export default App;