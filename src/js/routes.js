import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import LandingPage from './containers/LandingPage/LandingPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import SignUp from './components/SignUp/SignUpForm'

export default (
  <Route path="/" component={App}>
    <Route path="/profile/:username" component={ProfilePage} />
    <Route path="/signup" component={SignUp} />
    <IndexRoute  component={LandingPage} />
  </Route>
);
