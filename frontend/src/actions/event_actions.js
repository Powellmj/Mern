import * as APIUtil from '../util/group_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const requestEvent = event => (
  APIUtil.receiveEvent(event)
    .catch(err => (console.log(err))
    )
);

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const requestAllEvents = events => (
  APIUtil.receiveAllEvents(events)
    .catch(err => (console.log(err))
    )
);