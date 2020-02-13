import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT } from '../actions/event_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      console.log(action.events)
      return Object.assign({}, action.events.data);
    case RECEIVE_EVENT:
      return Object.assign({}, action.event)
    default:
      return state;
  }
}