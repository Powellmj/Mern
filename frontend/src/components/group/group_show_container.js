import React from 'react';
import { connect } from 'react-redux';
import { requestGroup, joinGroup } from '../../actions/group_actions';
import { requestAllEvents } from '../../actions/event_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import GroupShow from './group_show';

const mapStateToProps = (state) => ({
  group: state.entities.groups.currentGroup,
  currentUser: state.session.currentUser,
  members: state.entities.groups.members
});

const mapDispatchToProps = (dispatch) => ({
  requestGroup: group => dispatch(requestGroup(group)),
  fetchAllEvents: group_id => { dispatch(requestAllEvents(group_id)) },
  joinGroup: (group_id, user_id) => { dispatch(joinGroup(group_id, user_id)) },
  updateGroup: (
    <button className="group-show-button" onClick={() => dispatch(openModal("groupUpdate"))}>
      Update group
    </button>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);