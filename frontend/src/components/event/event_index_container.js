import { connect } from 'react-redux';
import { requestAllGroupEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  group: state.entities.groups.currentGroup
});

const mapDispatchToProps = dispatch => ({
  fetchAllGroupEvents: group_id => {dispatch(requestAllGroupEvents(group_id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);