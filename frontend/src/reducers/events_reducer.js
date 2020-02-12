import { RECEIVE_ALL_EVENTS } from '../actions/event_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return Object.assign({}, state, action.events);
    default:
      return state;
  }
}