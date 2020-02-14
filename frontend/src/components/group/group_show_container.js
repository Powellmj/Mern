import { connect } from 'react-redux';
import { requestGroup, joinGroup } from '../../actions/group_actions';
import { requestAllEvents } from '../../actions/event_actions';
import GroupShow from './group_show';

const mapStateToProps = (state) => ({
  group: state.entities.groups.currentGroup,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestGroup: group => dispatch(requestGroup(group)),
  fetchAllEvents: group_id => { dispatch(requestAllEvents(group_id)) },
  joinGroup: (group_id, user_id) => { dispatch(joinGroup(group_id, user_id)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);