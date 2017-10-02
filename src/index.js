import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { store, updateFrame, birdjump, game, states, rungame } from './store/store';

ReactDOM.render(
  <Router>
    <App store={store} updateFrame={updateFrame} game={game}/>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
function onpress(evt) {
    switch (game.currentstate) {
    default:
    case states.Splash:
      rungame()
      birdjump(store.bird)
      break
    case states.Game:
      birdjump(store.bird)
      break
    case states.Score:
      break
  }
}

document.addEventListener('mousedown', onpress);
