import { connect } from 'react-redux';
import { requestAllGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  // placeholder until db is seeded
  groups: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise']
});

const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => dispatch(requestAllGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);