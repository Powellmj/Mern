import React from 'react';
import { connect } from 'react-redux';
import { requestEvent, joinEvent, requestAttendees } from '../../actions/event_actions';
import { requestGroup } from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EventShow from './event_show';

const mapStateToProps = state => ({
  event: state.entities.events,
  group: state.entities.groups.currentGroup,
  currentUser: state.session.currentUser,
  attendees: state.entities.events.attendees
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: event_id => dispatch(requestEvent(event_id)),
  fetchGroup: group_id => dispatch(requestGroup(group_id)),
  attendEvent: (event_id, user_id) => dispatch(joinEvent(event_id, user_id)),
  updateEvent: (
    <button className="event-form-update-button" onClick={() => dispatch(openModal("eventUpdate"))}>
      Update simulation
    </button>
  ),
  closeModal: () => dispatch(closeModal)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);