import axios from 'axios';

export const fetchGroup = group_id => {
  return axios.get(`/api/groups/${group_id}`, group_id)
};

export const fetchAllGroups = groups => (
  axios.get('/api/groups/', groups)
);

export const createGroup = data => {
  return axios.post('/api/groups/', data)
}

export const joinGroup = (group_id, user_id) => {
  return axios.patch(`/api/groups/${group_id}`, (group_id, user_id))
}

export const updateGroup = group =>
  axios.patch(`/api/groups/update/${group._id}`, group)