import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import splash_container from './splash/splash_container';
import GroupFormContainer from './group/group_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={splash_container} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/api/groups" component={GroupShowContainer} />
      <ProtectedRoute path="/groups/create" component={GroupFormContainer}/>
    </Switch>
  </div>
);

export default App;