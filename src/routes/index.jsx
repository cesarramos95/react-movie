import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import MovieDetails from '../pages/MovieDetails';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details/movie/:id" component={MovieDetails} />
  </Switch>
);

export default Routes;
