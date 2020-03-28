import { RECEIVE_ALL_GROUP_EVENTS, RECEIVE_EVENT, RECEIVE_EVENT_ATTENDEES, RECEIVE_ALL_EVENTS } from '../actions/event_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return Object.assign({}, state, action.events.data);
    case RECEIVE_ALL_GROUP_EVENTS:
      return Object.assign({}, state, action.events.data);
    case RECEIVE_EVENT:
      return Object.assign({}, state, action.event)
    default:
      return state;
  }
}