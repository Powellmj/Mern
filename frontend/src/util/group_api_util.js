import axios from 'axios';

export const createGroup = data => {
  return axios.post('/api/groups/', data)
}