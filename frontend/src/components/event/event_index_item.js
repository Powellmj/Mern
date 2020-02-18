import React from 'react';
import EventIndex from './event_index';

const EventIndexItem = ({ past, event }) => {
  let eventDate = (new Date(event.event_start)).toDateString();
  
  var mapAttendees = event.attendees || [];
  var defaultArr = event.attendees
  if (event.attendees.length <= 3) {
    mapAttendees = defaultArr.map(attendee => {
      return (<span key={attendee} className="event-index-profile-picture"><i className="fa fa-user"></i></span>)
    })
  } else if (event.attendees.length > 3) {
    mapAttendees = event.attendees.slice(0, 3).map(attendee => {
      return (<span key={attendee} className="event-index-profile-picture"><i className="fa fa-user"></i></span>)
    })
  }

  return (
    <div className="event-index-item">
      <div className="event-index-border">
        {past ? (
          <div>
            <div className="event-index-item-date event-past">{eventDate}</div>
            <div className="event-index-item-title event-past">{event.title}</div>
            </div>
          ):(
            <div>
          <div className="event-index-item-date">{eventDate}</div>
          <div className="event-index-item-title">{event.title}</div>
          </div>
          )}
        <div className="event-index-item-location"><i className="fas fa-map-marker-alt"></i>{event.location}</div>
        {past ? null : (
        <div className="event-index-item-desc">{event.desc}</div>
        )}
        <div>
          <div>
          </div>
          <div className="event-index-item-attend-box">
            <div className="event-index-item-pictures"> 
            <span className="event-index-item-attendees"> {event.attendees.length} {event.attendees.length === 1 ? "Attendee" : "Attendees" }</span>
            {mapAttendees}
            </div>
            {past ? null : (
            <button className="event-index-item-attend-button">Attend</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default EventIndexItem;