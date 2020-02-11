import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import GroupForm from './group_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
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