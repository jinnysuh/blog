import React, {Component} from 'react'

import Video from '../../components/Video'
import Home from './Home'
import FirstPage from './FirstPage'
import {Route, Switch, Link} from 'react-router-dom'

export default function Videos() {
  return (
    <div>
      <Switch>
        <Route exact path="/Watch/" component={Home} />
        <Route path="/Watch/1" component={FirstPage} />
      </Switch>
      <button className="btn btn-primary">
        <Link style={{color: '#fff'}} to="/Watch/1">Next Page</Link>
      </button>
   
    </div>
  )
}