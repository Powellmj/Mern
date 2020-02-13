import axios from 'axios';

// axios doesn't allow us to get the req.body from GET requests
// so instead we'll use query to achieve the same result, but make it a k-v pair like the way postman would
export const fetchAllEvents = group_id => (
  axios.get(`/api/events/?group_id=${group_id}`)
);

export const createEvent = event => (
  axios.post('/api/events/', event)
);