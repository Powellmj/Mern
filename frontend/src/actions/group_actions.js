import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUP = "RECEIVE_GROUP";

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const createGroup = group => dispatch => (
  APIUtil.createGroup(group)
    .then(group => dispatch(receiveGroup(group.data)))
    .catch(err => console.log(err))
);