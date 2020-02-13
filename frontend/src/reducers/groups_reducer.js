import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP:
      return Object.assign({}, state, { currentGroup: action.group});
    case RECEIVE_ALL_GROUPS:
      return Object.assign({}, action.groups);
    default:
      return state;
    }
}