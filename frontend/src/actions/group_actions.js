import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUP = "RECEIVE_GROUP";

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const requestGroup = group => (
  APIUtil.receiveGroup(group)
  .catch(err => (console.log(err))
  )
);