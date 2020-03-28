import { connect } from 'react-redux';
import { requestAllEvents } from '../../actions/event_actions'
import EventPageIndex from './event_page_index';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  linkTitles: ['Teach a class', 'Meet new people', 'Grow your brand', 'Practice a language'],
  linkRoutes: ['teach-a-class', 'meet-new-people', 'grow-your-brand', 'practice-a-language']
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPageIndex);