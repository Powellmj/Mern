import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS } from '../actions/group_actions';

const initialState = {};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return Object.assign({}, state, action.groups);
    default:
      return state;
    }
}