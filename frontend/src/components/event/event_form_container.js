import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import { requestGroup } from '../../actions/group_actions';
import EventForm from './event_form';
import { fetchGroup } from '../../util/group_api_util';

const mapStateToProps = state => ({
  group: state.entities.groups.currentGroup
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(requestEvent(event)),
  fetchGroup: group => dispatch(requestGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);