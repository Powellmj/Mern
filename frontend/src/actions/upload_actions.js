import axios from 'axios';

export const receiveGroup = group => ({
  type: 'RECEIVE_GROUP',
  group
});


export const uploadGroupProfileImage = (data, group_id) => dispatch => {
  return (
    axios
      .patch(`/api/upload/${group_id}`, data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`
        }
      })
      .then(response => dispatch(receiveGroup(response.data)))
  )
};