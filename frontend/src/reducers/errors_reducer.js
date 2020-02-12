import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import events from './events_errors_reducer';

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer,
  events
});

export default ErrorsReducer;