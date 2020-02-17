import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      past: [],
      future: [],
    }

    this.mapEvents = this.mapEvents.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
  }

  mapEvents() {
    var today = new Date('2020-01-02');
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = yyyy + '-' + mm + '-' + dd;

    this.props.events.map(event => {
      if (new Date(today) < new Date(event.event_start) && event.group_id === this.props.group._id) {
        return (
          this.state.future.push(event)
        )
      } else if (new Date(today) > new Date(event.event_start) && event.group_id === this.props.group._id) {
        return (
         this.state.past.push(event)
        )
      }
    })
  }

  handleExpand(ele) {
    var list = document.querySelector(ele)
    if (list.style.maxHeight === "inherit") {
      list.style.maxHeight = "1045px";
    } else {
    list.style.maxHeight = "inherit";
    }
  }

  componentDidMount(){
    this.props.fetchAllEvents(this.props.group._id)
  }

  render(){
    if (!this.state.future.length && !this.state.past.length) {this.mapEvents()}
    return (
      <div className="event-index">
          <a id="events"></a>
        <div className="event-index-banner">
          <div className="event-index-banner-title">Upcoming simulations {
          this.state.future.length ? `(${this.state.future.length})` : "(Keeping our options open)"}</div>
          <div onClick={() => {this.handleExpand(".event-list-future")}} className="event-index-banner-see">See all</div>
        </div>
        <ul className="event-list-future">
          {this.state.future.map(event => {
            return (
              <li key={event._id}>
                <Link to={`/groups/${this.props.group._id}/events/${event._id}`}>
                  <EventIndexItem event={event} past={false} />
                </Link>
              </li>
            )}
          )}
        </ul>
        <div className="event-index-banner">
          <div className="event-index-banner-title">Past simulations {
          this.state.past.length ? `(${this.state.past.length})` : "(Clean slate!)"}</div>
          <div onClick={() => {this.handleExpand(".event-list-past")}} className="event-index-banner-see">See all</div>
        </div>
        <ul className="event-list-past">
          {this.state.past.map(event => {
            return (
            <li key={event._id}>
              <Link to={`/groups/${this.props.group._id}/${event._id}`}>
                <EventIndexItem event={event} past={true} />
              </Link>
            </li>
          )})}
        </ul>
            <a id="photos"></a>
          <div className="event-index-banner">
            <div className="event-index-banner-title">Photos (None yet!)</div>
            <div className="event-index-banner-see">See all</div>
          </div>
          <div className="event-index-photos">
            <div className="event-index-photo"><i className="fa fa-camera"></i></div>
            <div className="event-index-photo"><i className="fa fa-camera"></i></div>
            <div className="event-index-photo"><i className="fa fa-camera"></i></div>
        </div>
          <a id="discussions"></a>
        <div className="event-index-banner">
          <div className="event-index-banner-title">Discussions (Quiet in here...)</div>
          <div className="event-index-banner-see">See all</div>
        </div>
      </div>
    )
  }
};

export default EventIndex;