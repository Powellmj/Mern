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
    this.onCancel = this.onCancel.bind(this)
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

  onCancel() {
    this.props.closeModal()
  }

  render(){
    return(
      <div className="group-update-form-container">
        <p className="group-update-header">Update Group</p>
        <form className="group-update-form" onSubmit={this.handleSubmit}>
          <label className="group-update-label"> Group name <br/>
            <input className="group-update-form-title" placeholder="group name" type="text"
            value={this.state.title}
            onChange={this.handleInput('title')} />
          </label>
          <label className="group-update-label"> Group description <br/>
            <textarea className="group-update-form-desc" 
            placeholder="group description" type="text"
            value={this.state.desc} 
            onChange={this.handleInput('desc')} />
          </label>
          <label className="group-update-label"> Group location <br/>
            <input className="group-update-form-location" placeholder="group location" type="text"
            value={this.state.location}
            onChange={this.handleInput('location')} />
          </label>
          <button className="session-submit group-update-submit">Update group</button>
        </form>
        <button onClick={this.onCancel} className="session-submit demo group-update-cancel">Cancel</button>
      </div>
    )
  }
};

export default GroupUpdateForm;