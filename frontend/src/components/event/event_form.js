import React from 'react';

class EventForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      desc: '',
      location: '',
      event_date: '',
      start_time: '',
      end_time: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <div>
        
      </div>
    )
  }
};

export default EventForm;