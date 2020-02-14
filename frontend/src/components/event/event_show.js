import React from 'react';

class EventShow extends React.Component {
  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.event_id)
  }

  render(){
    console.log(this.props)
    const event = this.props.event;
    const dateDay = (new Date(event.date)).toDateString();
    return (
      <div className="event-show-container">
        <div className="event-show-date">{dateDay}</div>
        <div className="event-show-title">{event.title}</div>
        <div className="event-show-host-container">
          <div className="event-show-host-box">
            <div className="event-show-host-image">image</div>
            <div className="event-show-host-details">
              <div className="event-show-host-by">Hosted by</div>
              <div className="event-show-host-owner">group owner</div>
            </div>
          </div>
          <div className="event-show-host-share">
            <i className="fas fa-share"></i>
            <div className="event-show-host-share-detail">Share</div>
          </div>
        </div>
        <div className="event-show-image">image here</div>
        <div className="event-show-details">
          <div className="event-show-details-title">Details</div>
          <div className="event-show-details-desc">{event.desc}</div>
        </div>
        <div className="">
          <div className="">
            <div>Attendees (14)</div>
            <div>See all</div>
          </div>
          <div>
            map out attendees
          </div>
        </div>
        <div className="event-show">
          <div>comments</div>
          <div>comments details</div>
        </div>
        <div className="event-show-footer">
          <div className="event-show-footer-details">
            <div className="event-show-footer-details-date">{`${dateDay} · ${event.event_start}`}</div>
            <div className="event-show-footer-details-title">{event.title}</div>
          </div>
          <div>
            <div>
              <div>free</div>
              <div>0 spots left</div>
            </div>
            <div><i className="far fa-star"></i></div>
            <div>Attend</div>
          </div>
        </div>
      </div>
    )
  }
};

export default EventShow;