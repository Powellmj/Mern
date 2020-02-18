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
    this.onCancel = this.onCancel.bind(this)
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

    this.props.modifyEvent(updatedEvent)
    this.props.closeModal()
  }

  onCancel() {
    this.props.closeModal()
  }

  handleInput(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.event.id)
    this.setState({
      title: this.props.event.title,
      desc: this.props.event.desc,
      location: this.props.event.location,
      event_start: this.props.event.event_start,
      event_end: this.props.event.event_end
    })
  }

  // to fix after
  renderErrors(){
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
    let start_date = this.state.event_start.toString().slice(0, 16)
    let end_date = this.state.event_end.toString().slice(0, 16)
    return(
      <div className="group-update-form-container event-update-form">
        <p className="group-update-header">Update Simulation</p>
        {this.renderErrors()}
        <form className="group-update-form" onSubmit={this.handleSubmit}>
          <label className="group-update-label"> Simulation Name <br />
            <input className="event-form-title" placeholder="simulation name" type="text"
              value={this.state.title}
              onChange={this.handleInput('title')} />
          </label>
          <label className="group-update-label"> Simulation description <br />
            <textarea className="group-update-form-desc"
              placeholder="simulation description" type="text"
              value={this.state.desc}
              onChange={this.handleInput('desc')} />
          </label>
            <label className="group-update-label"> Simulation Location <br />
              <input className="event-form-location" placeholder="simulation location" type="text"
                value={this.state.location}
                onChange={this.handleInput('location')} />
            </label>
              <label className="group-update-label"> Simulation Start <br />
                <input className="event-form-event_start" type="datetime-local"
                  value={start_date}
                  onChange={this.handleInput('event_start')}
                  min="2020-02-17T13:41" max="2025-01-01T00:00" />
              </label>
              <label className="group-update-label"> Simulation End <br />
                <input className="event-form-event_end" type="datetime-local"
                  value={end_date}
                  onChange={this.handleInput('event_end')}
                  min="2020-02-17T13:41" max="2025-01-01T00:00" />
              </label>
          <button className="session-submit group-update-submit">Update simulation</button>
          <input type="hidden" id="timezone" value="-8.00" />
        </form>
        <button onClick={this.onCancel} className="session-submit demo group-update-cancel">Cancel</button>
      </div>
    )
  }
}

export default EventUpdateForm;