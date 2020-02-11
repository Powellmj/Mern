import { combineReducers } from 'redux';
import groups from './groups_reducer';

const RootReducer = combineReducers({
  groups
});

export default RootReducer;