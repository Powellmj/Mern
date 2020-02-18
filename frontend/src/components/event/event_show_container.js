import { connect } from 'react-redux';
import { requestEvent, joinEvent } from '../../actions/event_actions';
import { requestGroup } from '../../actions/group_actions';
import EventShow from './event_show';

const mapStateToProps = state => ({
  event: state.entities.events,
  group: state.entities.groups.currentGroup,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: event_id => dispatch(requestEvent(event_id)),
  fetchGroup: group_id => dispatch(requestGroup(group_id)),
  attendEvent: (event_id, user_id) => dispatch(joinEvent(event_id, user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);