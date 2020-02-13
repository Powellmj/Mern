import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions';
// import { requestGroup } from '../../actions/group_actions';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  group: state.entities.groups.currentGroup
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: group_id => {
    dispatch(requestAllEvents(group_id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);