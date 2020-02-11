import axios from 'axios';

export const getGroup = id => {
  return axios.get(`/api/groups/${id}`)
};