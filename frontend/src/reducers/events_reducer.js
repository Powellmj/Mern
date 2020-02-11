import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS
} from '../actions/events_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, action.event);
    case RECEIVE_All_EVENTS:
      return Object.assign({}, state, action.events);
    default:
      return state;
  }
}

export default EventsReducer;