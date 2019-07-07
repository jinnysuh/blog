import React from 'react';
import Home from './Home';
import FirstPage from './FirstPage';
import { Route, Switch, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default function Videos() {
  return (
    <Fade left>
      <div>
        <Switch>
          <Route exact path="/Watch/" component={Home} />
          <Route path="/Watch/1" component={FirstPage} />
        </Switch>
        <button className="btn btn-primary">
          <Link style={{ color: '#fff' }} to="/Watch">
            <font size="5">
              <font color="black">to Page 1</font>
            </font>
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link style={{ color: '#fff' }} to="/Watch/1">
            <font size="5">
              <font color="black">to Page 2</font>
            </font>
          </Link>
        </button>
      </div>
    </Fade>
  );
}
