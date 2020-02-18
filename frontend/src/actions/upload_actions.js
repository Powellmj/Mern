import axios from 'axios';

export const receiveGroup = group => ({
  type: 'RECEIVE_GROUP',
  group
});

export const uploadGroupProfileImage = (data, group_id) => dispatch => {
  return (
    axios
      .patch(`/api/upload/group/${group_id}`, data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`
        }
      })
      .then(response => dispatch(receiveGroup(response.data)))
  )
};

export const receiveEvent = event => ({
  type: "RECEIVE_EVENT",
  event
});

export const uploadEventProfileImage = (data, event_id) => dispatch => {
  return axios
    .patch(`/api/upload/event/${event_id}`, data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`
      }
    })
    .then(response => dispatch(receiveEvent(response.data)));
};