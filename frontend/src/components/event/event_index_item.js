import React from 'react';
import EventIndex from './event_index';

const EventIndexItem = ({ event }) => {
  // there is a drop shadow hover effect for each item
  let eventDate = (new Date(event.date)).toDateString();
  return (
    <div>
      <div>{eventDate}</div>
      <div>{event.title}</div>
      <div><i className="fas fa-map-marker-alt"></i>{event.location}</div>
      <div>{event.desc}</div>
      {/* only 3 attendee photos */}
      <div>
        <div>
          <div>attendee pictures</div>
          <div>14 attendees</div>
        </div>
        <div>
          <i className="far fa-comment-alt"></i>
          <div>69</div>
          <button>Attend</button>
        </div>
      </div>
    </div>
  )
};

export default EventIndexItem;