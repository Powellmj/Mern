import React from 'react';

class GroupUpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      desc: '',
      location: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e){
    e.preventDefault()
    let modGroup = {
      title: this.state.title,
      desc: this.state.desc,
      location: this.state.location,
      _id: this.props.group._id
    }

    this.props.modifyGroup(modGroup)
    this.props.closeModal()
  }

  componentDidMount(){
    this.setState({
      title: this.props.group.title,
      desc: this.props.group.desc,
      location: this.props.group.location
    })
  }

  render(){
    return(
      <div className="group-update-form-container">
        <form onSubmit={this.handleSubmit}>
          <input className="group-update-form-title" placeholder="group name" type="text"
          value={this.state.title}
          onChange={this.handleInput('title')} />

          <input className="group-update-form-desc" placeholder="group name" type="text"
          value={this.state.desc}
          onChange={this.handleInput('desc')} />

          <input className="group-update-form-location" placeholder="group name" type="text"
          value={this.state.location}
          onChange={this.handleInput('location')} />

          <button>Update group</button>
        </form>
      </div>
    )
  }
};

export default GroupUpdateForm;