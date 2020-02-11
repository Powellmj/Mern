import axios from 'axios';

export const fetchAllGroups = groups => (
  axios.get('/api/groups/', groups)
);