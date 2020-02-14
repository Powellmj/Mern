import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';
import EventShow from './event_show';

const mapStateToProps = state => ({
  event: state.entities.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: event_id => dispatch(requestEvent(event_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);