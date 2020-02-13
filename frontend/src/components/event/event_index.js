import React from 'react';

class EventIndex extends React.Component {
  componentDidMount(){
    // console.log(this.props)
    this.props.fetchAllEvents(this.props.group._id)
  }

  render(){
    return (
      <div>
        <div>Upcoming simulations (5+)</div>
        <div>Past simulations (560)</div>
      </div>
    )
  }
};

export default EventIndex;