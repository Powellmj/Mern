import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => ({
  event: 'placeholder'
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: event => dispatch(requestEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);