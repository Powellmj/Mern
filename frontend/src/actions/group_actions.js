import * as APIUtil from '../util/group_api_util';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';

const receiveAllGroups = groups => ({
  type: RECEIVE_ALL_GROUPS,
  groups
});

export const requestAllGroups = () => dispatch => APIUtil.fetchAllGroups()
  .then(groups => dispatch(receiveAllGroups(groups)))

  