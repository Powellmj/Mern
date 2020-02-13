import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAllEvents(this.props.group._id)
  }

  render(){
    debugger;
    return (
      <div>
        <div>Upcoming simulations (5+)</div>
        <ul>
          {
            this.props.events.map((event,i) => (
              <li key={i}>
                <EventIndexItem event={event} />
              </li>
            ))
          }
        </ul>
        <div>Past simulations (560)</div>
      </div>
    )
  }
};

export default EventIndex;