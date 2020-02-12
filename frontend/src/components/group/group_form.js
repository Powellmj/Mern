import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      location: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    console.log(this.props)
    e.preventDefault();
    let group = {
      title: this.state.title,
      desc: this.state.desc,
      location: this.state.location,
      owner_id: this.props.currentUser.id
    }
    console.log(group)
    this.props.createGroup(group);
  }

  render() {
    return (
      <div>
        <div className="create-group-header">
          Create a Group
        </div>
        <div className="create-group-form">
          <form onSubmit={this.handleSubmit}> 
            <label className="group-form-label">Location:
              <input className="group-form-input" type="text" 
              value={this.state.location}
              onChange={this.update('location')}
              />
            </label>
            <label className="group-form-label">Group Name:
              <input className="group-form-input" type="text"
              value={this.state.title}
              onChange={this.update('title')}
              />
            </label>
            <label className="group-form-label">Description:
              <input className="group-form-input" type="text" 
              value={this.state.desc}
              onChange={this.update('desc')}
              />
            </label>
            <input className="group-form-submit" type="submit" value="Create"/>
          </form>
        </div>
      </div>  
    )
  }
}

export default withRouter(GroupForm);