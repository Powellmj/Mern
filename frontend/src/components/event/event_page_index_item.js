import React from 'react';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';

const EventIndexItem = (props) => {

  const handleClick = () => {
    props.history.push({ pathname: `/groups/${props.event.group_id}/events/${props.event._id}`});
  }
  return (
    <div onClick={() => { handleClick(props.event._id) }} className="event-page-index-item">
      <Moment class="event-page-index-item-time" format="h:mm A">{props.event.event_start}</Moment>
      <div className="event-page-index-item-text">
        {props.event.group_id ? <div className="index-item-group-title">{props.event.group_id.title}</div> : null}
        <div className="index-item-title">{props.event.title}</div>
        <div className="event-page-index-item-members">
          {props.event.attendees.length + 1}
          {' going'}
        </div>
      </div>
    </div>
  )
};

export default withRouter(EventIndexItem);