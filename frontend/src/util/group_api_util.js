import axios from 'axios';

export const fetchGroup = id => {
  return axios.get(`/api/groups/${id}`)
};

export const fetchAllGroups = groups => (
  axios.get('/api/groups/', groups)
);
export const createGroup = data => {
  return axios.post('/api/groups/', data)
}
