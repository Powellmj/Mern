import { connect } from 'react-redux';
import { requestAllGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  // placeholder until db is seeded
  groups: [{title: 'Bulbasaur', desc: "plant thingy", location: "middle earth", owner: 1}, 'Ivysaur', 'Venusaur', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise'],
  linkTitles: ['Teach a class', 'Meet new people', 'Grow your brand', 'Practice a language'],
  linkRoutes: ['teach-a-class', 'meet-new-people', 'grow-your-brand', 'practice-a-language']
});

const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => dispatch(requestAllGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);