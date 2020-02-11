import { combineReducers } from 'redux';
import entites from './entities_reducer';
import errors from './errors_reducer';
import session from './session_reducer';

const RootReducer = combineReducers({
  session,
  entites,
  errors
});

export default RootReducer;