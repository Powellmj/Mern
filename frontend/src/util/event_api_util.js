import axios from 'axios';

export const receiveEvent = (group_id, event_id) => {
  return axios.get(`/api/groups/${group_id}/events/${event_id}`)
};

export const receiveAllEvents = group_id => {
  return axios.get(`/api/groups/${group_id}/events`)
};