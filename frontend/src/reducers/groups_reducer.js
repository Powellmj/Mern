import {
  RECEIVE_GROUP
} from '../actions/group_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, action.group);
    default:
      return state;
  }
}

export default GroupsReducer;