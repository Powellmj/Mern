import React from 'react';

class EventUpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.event.title
    }
  }
  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.event_id)
  }
  render(){
    console.log(this.props)
    return(
      <div className="event-form-container">
        <form>
          <input className="event-form-title" placeholder="simulation name" value={this.state.title} />
        </form>
      </div>
    )
  }
}

export default EventUpdateForm;