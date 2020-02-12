import axios from 'axios';

export const fetchGroup = group => {
  return axios.get('/api/groups/', group)
};

export const fetchAllGroups = groups => (
  axios.get('/api/groups/', groups)
);
export const createGroup = data => {
  return axios.post('/api/groups/', data)
}
