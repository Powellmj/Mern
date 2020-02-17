import { connect } from 'react-redux';
import { requestEvent, updateEvent } from '../../actions/event_actions';
import EventUpdateForm from './event_update_form';

const mapStateToProps = state => ({
  event: state.entities.events,
  errors: state.errors.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: event_id => dispatch(requestEvent(event_id)),
  modifyEvent: event => dispatch(updateEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventUpdateForm);