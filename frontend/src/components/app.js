import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Footer from './footer/footer';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import splash_container from './splash/splash_container';
import GroupIndexContainer from './group/group_index_container';
import EventPageIndexContainer from './event/event_page_index_container';
import GroupFormContainer from './group/group_form_container';
import GroupShowContainer from './group/group_show_container';
import EventFormContainer from './event/event_form_container';
import EventShowContainer from './event/event_show_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={splash_container} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/groups/create" component={GroupFormContainer}/>
      <ProtectedRoute exact path="/groups/:group_id" component={GroupShowContainer} />
      <ProtectedRoute exact path="/groups" component={GroupIndexContainer} />
      <ProtectedRoute exact path="/calendar" component={EventPageIndexContainer} />
      <ProtectedRoute exact path="/groups/:group_id/create" component={EventFormContainer} />
      <ProtectedRoute exact path="/groups/:group_id/events/:event_id" component={EventShowContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;