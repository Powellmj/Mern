import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import GroupForm from './group_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    group: state.entities.groups.currentGroup,
    groups: state.entities.groups
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGroup: group => dispatch(createGroup(group))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);