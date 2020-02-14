import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAllEvents(this.props.group._id)
  }

  render(){
    return (
      <div className="">
        <div className="">
          <div className="">Upcoming simulations (5+)</div>
          <div className="">See all</div>
        </div>
        <ul>
          {
            this.props.events.map(event => {
              // need to implement logic for future and past dates
              return (
                <li key={event._id}>
                  <Link to={`/groups/${this.props.group._id}/${event._id}`}>
                    <EventIndexItem event={event} />
                  </Link>
                </li>
              )}
            )
          }
        </ul>
        <div className="">
          <div className="">Past simulations (560)</div>
          <div className="">See all</div>
        </div>
        <ul>
          {
            this.props.events.map(event => (
              <li key={event._id}>
                <Link to={`/groups/${this.props.group._id}/${event._id}`}>
                  <EventIndexItem event={event} />
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="">
          <div className="">Photos (74)</div>
          <div className="">See all</div>
        </div>
        <div className="">
          <div className="">Discussions (2)</div>
          <div className="">See all</div>
        </div>
      </div>
    )
  }
};

export default EventIndex;