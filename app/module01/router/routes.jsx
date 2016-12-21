import React from 'react';
import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';

import Layout from '../layout';

const Routers = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>);

export default Routers;
