import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

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

export const requestAllEvents = () => dispatch => EventAPIUtil.fetchAllEvents()
  .then(events => dispatch(receiveAllEvents(events)))

export const requestEvent = event => dispatch => EventAPIUtil.createEvent(event)
  .then(newEvent => dispatch(receiveEvent(newEvent)))