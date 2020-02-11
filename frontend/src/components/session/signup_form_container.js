import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign up'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    processDemo: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);