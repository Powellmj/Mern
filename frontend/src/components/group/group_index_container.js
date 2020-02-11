import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { requestAllGroups } from '../../actions/group_actions';

const mapStateToProps = state = ({
  // placeholder until db is seeded
  groups: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran ♀', 'Nidorina', 'Nidoqueen', 'Nidoran ♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff']
});

const mapDispatchToProps = dispatch = ({
  fetchAllGroups: () => dispatch(requestAllGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);