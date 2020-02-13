import axios from 'axios';

// cant use get for body
export const fetchAllEvents = group_id => (
  axios.get(`/api/events/?group_id=${group_id}`)
);

export const createEvent = event => (
  axios.post('/api/events/', event)
);