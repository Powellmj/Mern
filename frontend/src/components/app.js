import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import splash_container from './splash/splash_container';
import GroupIndexContainer from './group/group_index_container';
import GroupFormContainer from './group/group_form_container';
import GroupShowContainer from './group/group_show_container';
import EventFormContainer from './event/event_form_container';
import EventShowContainer from './event/event_show_container';
import EventUpdateFromContainer from './event/event_update_form_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/events/:event_id/update" component={EventUpdateFromContainer} />
      <AuthRoute exact path="/" component={splash_container} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/groups/create" component={GroupFormContainer}/>
      <ProtectedRoute exact path="/groups/:group_id" component={GroupShowContainer} />
      <ProtectedRoute exact path="/groups" component={GroupIndexContainer} />
      <ProtectedRoute exact path="/groups/:group_id/create" component={EventFormContainer} />
      <ProtectedRoute exact path="/groups/:group_id/events/:event_id" component={EventShowContainer} />
    </Switch>
  </div>
);

export default App;