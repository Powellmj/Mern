import { RECEIVE_EVENT_ERRORS, CLEAR_EVENT_ERRORS } from '../actions/event_actions';

const _nullErrors = [];

export default function (state = _nullErrors, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      return [];
    default:
      return state;
  }
}