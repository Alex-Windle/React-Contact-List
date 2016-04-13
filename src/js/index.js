// Javascript Entry Point
import data from './data';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import SingleView from './single_view';
import ListView from './list_view';
import AddUser from './add_user';
import Heading from './heading';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Heading}>
      <IndexRoute component={ListView}/>
      <Route path="/add-user" component={AddUser}/>
      <Route path="/single-view/:user_details" component={SingleView}/>
    </Route>
  </Router>
), document.querySelector('.app'))

