import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAllEvents(this.props.group._id)
  }

  render(){
    // will need to eventually build in logic to only display upcomming and past events once the db is seeded
    return (
      <div>
        <div>
          <div>Upcoming simulations (5+)</div>
          <div>See all</div>
        </div>
        <ul>
          {
            this.props.events.map(event => (
              <li key={event._id}>
                <EventIndexItem event={event} />
              </li>
            ))
          }
        </ul>
        <div>
          <div>Past simulations (560)</div>
          <div>See all</div>
        </div>
        <div></div>
        <ul>
          {
            this.props.events.map(event => (
              <li key={event._id}>
                <EventIndexItem event={event} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
};

export default EventIndex;