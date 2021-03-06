import axios from 'axios';

// axios doesn't allow us to get the req.body from GET requests
// so instead we'll use query to achieve the same result, but make it a k-v pair like the way postman would
export const fetchAllGroupEvents = group_id => (
  axios.get(`/api/events/groups/?group_id=${group_id}`)
);

export const fetchAllEvents = events => (
  axios.get('/api/events/', events)
);

export const fetchEvent = event_id =>
  axios.get(`/api/events/${event_id}`)

export const createEvent = event => (
  axios.post('/api/events/', event)
);

export const joinEvent = (event_id, user_id) => (
  axios.patch(`/api/events/${event_id}`, (event_id, user_id))
)

export const updateEvent = event =>
  axios.patch(`/api/events/update/${event._id}`, event)