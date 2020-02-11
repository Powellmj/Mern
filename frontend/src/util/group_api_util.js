import axios from 'axios';

export const receiveGroup = id => {
  return axios.get(`/api/groups/${id}`)
};