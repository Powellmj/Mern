import axios from 'axios';

export const fetchAllEvents = events => (
  axios.get('/api/:group_id/events', events)
);