import { connect } from 'react-redux';
import { requestAllGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  groups: Object.values(state.entities.groups),
  linkTitles: ['Teach a class', 'Meet new people', 'Grow your brand', 'Practice a language'],
  linkRoutes: ['teach-a-class', 'meet-new-people', 'grow-your-brand', 'practice-a-language']
});

// may need another dispatch for more specific requirements
const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => dispatch(requestAllGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);