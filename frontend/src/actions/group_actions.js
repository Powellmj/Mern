import * as APIUtil from '../util/group_api_util';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';

const receiveAllGroups = groups => ({
  type: RECEIVE_ALL_GROUPS,
  groups
});

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const requestAllGroups = () => dispatch => APIUtil.fetchAllGroups()
  .then(groups => dispatch(receiveAllGroups(groups.data)))
export const RECEIVE_GROUP = "RECEIVE_GROUP";


export const requestGroup = group => dispatch => (
  APIUtil.fetchGroup(group)
  .then(group => dispatch(receiveGroup(group.data)))
  .catch(err => (console.log(err))
  )
);

export const createGroup = group => dispatch => (
  APIUtil.createGroup(group)
    .then(group => dispatch(receiveGroup(group.data)))
    .catch(err => console.log(err))
);

export const joinGroup = (group_id, user_id) => dispatch => {
  return APIUtil.joinGroup(group_id, user_id)}