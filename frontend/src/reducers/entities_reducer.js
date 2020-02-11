import { combineReducers } from 'redux';
import groups from './groups_reducer';

const RootReducer = combineReducers({
  groups,
  events
});

export default RootReducer;