import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUP = "RECEIVE_GROUP";

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const requestGroup = group => dispatch => (
  APIUtil.fetchGroup(group)
  .then(dispatch(receiveGroup(group.data)))
  .catch(err => (console.log(err))
  )
);

export const composeGroup = data => dispatch => (
  APIUtil.createGroup(data)
    .then(group => dispatch(receiveGroup(group)))
    .catch(err => console.log(err))
);