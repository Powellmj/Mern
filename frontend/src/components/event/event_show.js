import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props)
    
    this.user = this.props.currentUser

    this.mapAttendees = this.mapAttendees.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.event_id)
  }

  handleClick(){
    this.props.attendEvent(this.props.match.params.event_id, this.user.id)
  }

  mapAttendees() {
    if (this.props.event.attendees) {
    }
    
    var defaultArr = [
      { name: "Invite your mom!"},
      { name: "Invite your friend!" },
      { name: "Invite your coworker!" },
      { name: "Invite your dog!" },
      { name: "Invite your long lost cousin!" },
      { name: "Invite your pet rock!" },
      { name: "Invite your frenemy!" },
      { name: "Invite your crush!" }
    ]

    var attendeesArr = this.props.event.attendees || []
    defaultArr.map(defaultAttendee => {
      if (attendeesArr.length < 8) {
        attendeesArr.push(defaultAttendee)
      }
    })

    return attendeesArr.map(attendee => {
      return (
        <div className="event-show-attendee-box">
          <div className="event-show-attendee-picture"><i className="event-show-attendee fa fa-user"></i></div>
          <div className="event-show-attendee-name">{attendee.name}</div>
          <div className="event-show-attendee-member">Member</div>
        </div>
      )
    })
  }

  render(){
    const event = this.props.event;
    const group = this.props.group;
    const dateDay = (new Date(event.date)).toDateString();
    return (
      <div className="event-show-container">
          <div className="event-show-sticky-header-whitespace"></div>
          <div className="event-show-sticky-header-pos">
          <div className="event-show-sticky-header">
            <div className="event-show-date sticky-date">{dateDay}</div>
            <div className="event-show-title sticky-title">{event.title}</div>
          </div>
        </div>
        <div className="event-show-header">
          <div className="event-show-date">{dateDay}</div>
          <div className="event-show-title">{event.title}</div>
          <div className="event-show-host-container">
            <div className="event-show-host-box">
              <div className="event-show-host-image"><i className="event-show-user fa fa-user"></i></div>
              <div className="event-show-host-details">
                <div className="event-show-host-by">Hosted by</div>
                <div className="event-show-host-owner">{group ? group.organizer || "Squiddy" : "Squiddy"}</div>
              </div>
            </div>
            <div className="event-show-host-share">
              <i className="fas fa-share"></i>
              <div className="event-show-host-share-detail">Share</div>
            </div>
          </div>
        </div>
        <div className="event-show-body">
          <div className="event-show-body-left">
            <div className="event-show-image" 
            style={{ backgroundImage: this.props.event.picture ? `url(${this.props.event.picture})` : null }}></div>
          <div className="event-show-details">
            <div className="event-show-details-title">Details</div>
            <div className="event-show-details-desc">{event.desc}</div>
          </div>
          <div className="">
              <div className="event-index-banner">
                <div className="event-index-banner-title">Attendees ({event.attendees ? event.attendees.length || 1 : 1})</div>
                <div className="event-index-banner-see">See all</div>
            </div>
            <div className="event-show-attendees-list">
              {this.mapAttendees()}
            </div>
          </div>
        </div>
          <div className="event-show-body-right-placeholder">
          <div className="event-show-body-right">
            { group ?
            (<Link to={`/groups/${group._id}`}>
              <div className="event-show-right-group">
                <div className="event-show-group-image" 
                style={{ backgroundImage: `url(${this.props.group.picture})` }}>
                  {this.props.group.picture ? null : (<i className="fa fa-camera"></i>)}
                  </div>
                <div className="event-show-right-group-header">
                  <div className="event-show-right-group-title">{group ? group.title : null}</div>
                  <div className="event-show-right-group-desc">Public Group</div>
                </div>
              </div>
            </Link>) : null }
            <div className="event-show-right-info">
              <div className="event-show-cat">
                  <div><i className="fa fa-clock-o"></i></div>
                <div className="event-show-right-date">
                  <div>When: {dateDay}</div>
                  <div>Starting at: {event.start_time}</div>
                  <div>Ending at: {event.end_time}</div>
                </div>
              </div>
              <div className="event-show-cat">
              <div><i className="material-icons event-show-icon">place</i></div>
              <div className="event-show-location">Where: {event.location}</div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="event-show-footer-sticky">
          <div className="event-show-footer">
            <div className="event-show-footer-details">
              <div className="event-show-footer-details-date">{`${dateDay} · ${event.start_time}`}</div>
              <div className="event-show-footer-details-title">{event.title}</div>
            </div>
            <div className="event-show-footer-right">
              <div className="event-show-footer-right-availability">
                <div className="event-show-free">Free</div>
              </div>
              <div><i className="far fa-star"></i></div>
              <div><button className="group-show-button attend-button" onClick={this.handleClick}>Attend</button></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default EventShow;