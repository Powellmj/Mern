import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import groups from './groups_reducer';

const RootReducer = combineReducers({
  groups,
  session,
  errors
});

export default RootReducer;