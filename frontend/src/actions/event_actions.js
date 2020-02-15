import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
});

export const requestAllEvents = group_id => dispatch => EventAPIUtil.fetchAllEvents(group_id)
  .then(events => dispatch(receiveAllEvents(events)))

export const requestEvent = event_id => dispatch => EventAPIUtil.fecthEvent(event_id)
  .then(event => dispatch(receiveEvent(event)))

export const newEvent = (event, cb) => dispatch => EventAPIUtil.createEvent(event)
  .then(newEvent => {
    dispatch(receiveEvent(newEvent))
    cb(newEvent.data._id)
  })
  .catch(err => dispatch(receiveEventErrors(err.response.data)))

export const joinEvent = (event_id, user_id) => dispatch => EventAPIUtil.joinEvent(event_id, user_id);