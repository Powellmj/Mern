import { connect } from 'react-redux';
import { requestGroup ,updateGroup } from '../../actions/group_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import GroupUpdateForm from './group_update_form';

const mapStateToProps = state => ({
  group: state.entities.groups.currentGroup
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: group_id => dispatch(requestGroup(group_id)),
  modifyGroup: group => dispatch(updateGroup(group)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupUpdateForm);