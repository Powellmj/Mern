import axios from 'axios';

export const fetchAllEvents = events => (
  axios.get('/api/events/', events)
);

export const createEvent = event => (
  axios.post('/api/events/', event)
);