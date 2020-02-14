import { connect } from 'react-redux';
import { newEvent, clearEventErrors } from '../../actions/event_actions';
import { requestGroup } from '../../actions/group_actions';
import EventForm from './event_form';
import { fetchGroup } from '../../util/group_api_util';

const mapStateToProps = state => ({
  group: state.entities.groups.currentGroup,
  errors: state.errors.events
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(newEvent(event)),
  fetchGroup: group => dispatch(requestGroup(group)),
  clearErrors: () => dispatch(clearEventErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);