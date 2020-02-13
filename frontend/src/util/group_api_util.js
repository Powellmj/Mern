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
