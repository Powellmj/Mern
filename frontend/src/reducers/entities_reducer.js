import { combineReducers } from 'redux';
import groups from './groups_reducer';
import events from './events_reducer';

const RootReducer = combineReducers({
  groups,
  events
});

export default RootReducer;