import React from 'react';

class EventIndex extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <div>Upcoming simulations (5+)</div>
        <div>Past simulations (560)</div>
      </div>
    )
  }
};

export default EventIndex;