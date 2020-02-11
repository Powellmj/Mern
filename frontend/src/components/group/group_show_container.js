import { connect } from 'react-redux';
import { requestGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestGroup: dispatch(requestGroup(group))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow);