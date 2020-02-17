import React from 'react';

class EventUpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      desc: '',
      location: '',
      event_start: '',
      event_end: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e){
    e.preventDefault()
    let updatedEvent = {
      title: this.state.title,
      desc: this.state.desc,
      location: this.state.location,
      event_start: this.state.event_start,
      event_end: this.state.event_end,
      _id: this.props.event._id
    }
    // debugger;

    this.props.modifyEvent(updatedEvent)
  }

  handleInput(field){
    return e => this.setState({[field]: e.currentTarget.value});
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.event_id)
    this.setState({
      title: this.props.event.title,
      desc: this.props.event.desc,
      location: this.props.event.location,
      event_start: this.props.event.event_start,
      event_end: this.props.event.event_end
    })
    console.log(this.state)
  }

  // to fix after
  renderErrors(){
    console.log(this.props)
    return(
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))
        }
      </ul>
    )
  }

  render(){
    console.log(this.props)
    let start_date = this.state.event_start.toString().slice(0, -5)
    let end_date = this.state.event_end.toString().slice(0, -5)
    return(
      <div className="event-form-container">
        {/* {this.renderErrors()} */}
        <form onSubmit={this.handleSubmit}>
          <input className="event-form-title" placeholder="simulation name" type="text"
            value={this.state.title}
            onChange={this.handleInput('title')} />

          <input className="event-form-desc" placeholder="simulation name" type="text"
            value={this.state.desc}
            onChange={this.handleInput('desc')} />

          <input className="event-form-location" placeholder="simulation name" type="text"
            value={this.state.location}
            onChange={this.handleInput('location')} />

            {/* use of min/max for datetime-local will allow us to set restrictions on when they can make an event outside of validations
            we may need to build in logic so that users can't book within a certain time period
            - ex: users can only create events at least 7 days out to ensure that members have time to join the event */}
            {/* may need to implement in creation itself as well */}
          <input className="event-form-event_start" placeholder="simulation name" type="datetime-local"
            value={start_date}
            onChange={this.handleInput('event_start')}
            min="2020-02-17T13:41" max="2025-01-01T00:00" />

          <input className="event-form-event_end" placeholder="simulation name" type="datetime-local"
            value={end_date}
            onChange={this.handleInput('event_end')}
            min="2020-02-17T13:41" max="2025-01-01T00:00" />
          <button>Update simulation</button>
        </form>
      </div>
    )
  }
}

export default EventUpdateForm;