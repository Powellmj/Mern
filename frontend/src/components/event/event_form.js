import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 0,
      title: '',
      desc: '',
      location: '',
      date: '',
      start: '',
      end: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStage = this.handleStage.bind(this);
  }

  componentDidMount() {
    this.setState({ stage: 1 })
    this.props.fetchGroup(this.props.location.pathname.slice(8, -7))
  }

  handleStage(tick) {
    this.setState({ stage: this.state.stage += tick })
    if (this.state.stage < 1) { this.setState({ stage: 1 })}
    if (this.state.stage > 4) { this.setState({ stage: 4 })}
    if (this.state.stage === 1) {
      document.querySelector('.stage-1').style.display = 'flex';
      document.querySelector('.stage-2').style.display = 'none';
      document.querySelector('.stage-3').style.display = 'none';
      document.querySelector('.stage-4').style.display = 'none';
      document.querySelector('.create-group-stage-back-button').style.display = 'none';
    }
    if (this.state.stage === 2) {
      document.querySelector('.stage-1').style.display = 'none';
      document.querySelector('.stage-2').style.display = 'flex';
      document.querySelector('.stage-3').style.display = 'none';
      document.querySelector('.stage-4').style.display = 'none';
      document.querySelector('.create-group-stage-button').style.display = 'block';
      document.querySelector('.create-group-stage-back-button').style.display = 'block';
    }
    if (this.state.stage === 3) {
      document.querySelector('.stage-1').style.display = 'none';
      document.querySelector('.stage-2').style.display = 'none';
      document.querySelector('.stage-3').style.display = 'flex';
      document.querySelector('.stage-4').style.display = 'none';
      document.querySelector('.create-group-stage-button').style.display = 'block';
    }
    if (this.state.stage === 4) {
      document.querySelector('.stage-1').style.display = 'none';
      document.querySelector('.stage-2').style.display = 'none';
      document.querySelector('.stage-3').style.display = 'none';
      document.querySelector('.stage-4').style.display = 'flex';
      document.querySelector('.create-group-stage-button').style.display = 'none';
    }
  }

  update(field) {
    let button = document.querySelector('.create-group-stage-button')
    let subButton = document.querySelector('.group-form-submit')

    if (this.state.stage === 1 && this.state.location) {
      button.style.background = '#f65858';
      button.style.color = 'white';
      document.querySelector('.create-group-progress-1').style.display = "block"
    } else if (this.state.stage === 1 && !this.state.location) {
      button.style.background = 'rgb(209, 209, 209)';
      button.style.color = 'gray';
      document.querySelector('.create-group-progress-1').style.display = "none"
    }

    if (this.state.stage === 2 && this.state.title) {
      button.style.background = '#f65858';
      button.style.color = 'white';
      document.querySelector('.create-group-progress-2').style.display = "block"
    } else if (this.state.stage === 2 && !this.state.title) {
      button.style.background = 'rgb(209, 209, 209)';
      button.style.color = 'gray';
      document.querySelector('.create-group-progress-2').style.display = "none"
    }

    if (this.state.stage === 3 && this.state.location && this.state.title && this.state.desc) {
      subButton.style.background = '#f65858';
      subButton.style.color = 'white';
      document.querySelector('.create-group-progress-3').style.display = "block"
    } else if (this.state.stage === 3 && (!this.state.location || !this.state.title || !this.state.desc)) {
      subButton.style.background = 'rgb(209, 209, 209)';
      subButton.style.color = 'gray';
      document.querySelector('.create-group-progress-3').style.display = "none"
    }

    if (this.state.stage === 4 && this.state.location && this.state.title && this.state.desc) {
      subButton.style.background = '#f65858';
      subButton.style.color = 'white';
      document.querySelector('.create-group-progress-4').style.display = "block"
    } else if (this.state.stage === 4 && (!this.state.location || !this.state.title || !this.state.desc)) {
      subButton.style.background = 'rgb(209, 209, 209)';
      subButton.style.color = 'gray';
      document.querySelector('.create-group-progress-4').style.display = "none"
    }


    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let event = {
      title: this.state.title,
      desc: this.state.desc,
      location: this.state.location,
      event_start: this.state.start,
      event_end: this.state.end,
      group_id: this.props.group._id
    }
    this.props.createEvent(event)
    this.props.history.push(`/groups/${this.props.group._id}`)
  }

  renderErrors(){
    return (
      <ul>
        {
          this.props.errors.map((error, i) => (
            <li key={i}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  componentWillUnmount(){
    this.props.clearEventErrors()
  }

  render() {
    return (
      <div className="create-group-form-container">
        <div className="create-group-header">
          <div className="create-group-progress-1"></div>
          <div className="create-group-progress-1"></div>
          <div className="create-group-progress-2"></div>
          <div className="create-group-progress-3"></div>
          <div className="create-group-progress-4"></div>
          {`Step ${this.state.stage} of 4`}
        </div>
        <div className="create-group-form">
          <form onSubmit={this.handleSubmit}> 
            <div className="create-group-stage stage-1">
              <div className="create-group-stage-header">First, set your simulations location.</div>
              <div className="create-group-stage-text">
                Meetin simulations meet virtually online. 
                Let your group know where to connect you with and other members who live all around the world.</div>
              <input className="group-form-input" type="text" 
              value={this.state.location}
              onChange={this.update('location')}
              placeholder="Enter your virtual destination"
              />
            </div>
            <div className="create-group-stage stage-2">
              <div className="create-group-stage-header">
                What will your simulations name be?
              </div>
              <div className="create-group-stage-text">
                Choose a name that will give people a clear idea of what the simulation is about. 
                Feel free to get creative! You can edit this later if you change your mind
              </div>
              <input className="group-form-input" type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="By any other name would smell as sweet."
              />
            </div>
            <div className="create-group-stage stage-3">
              <div className="create-group-stage-header">Now describe what your simulation will be about</div>
              <div className="create-group-stage-text">
                People will see this when we promote your simulation, but you’ll be able to add to it later, too.<br /> <br/>
                1. What's the purpose of the simulation <br/>
                2. Who should join? <br/>
                3. What will you do at your simulations <br />
              </div>
              <textarea className="group-form-input group-desc" type="text" 
              value={this.state.desc}
              onChange={this.update('desc')}
              />
              <div className="create-group-example">
                <div className="create-group-example-header">Here's an example:</div>
                <div className="create-group-example-text">
                  "This is a group for anyone interested in hiking,
                  rock climbing, camping, kayaking, bouldering, etc. 
                  All skill levels are welcome. I started this group to meet 
                  other outdoor enthusiasts. Looking forward to exploring the 
                  outdoors with everybody."
                </div>
              </div>
            </div>
            <div className="create-group-stage stage-4">
              <div className="create-group-stage-header">Now set a date and time for you simulation.</div>
              <div className="create-group-stage-text">
                Let your group know when and where to plug into your simulation!
              </div>
              <label>Start
              <input type="datetime-local" value={this.state.start} onChange={this.update('start')}/>
              </label>
              <label>End
              <input type="datetime-local" value={this.state.end} onChange={this.update('end')}/>
              </label>
              <input className="group-form-submit" type="submit" value="Create"/>
            </div>
          </form>
            <div className="create-form-footer">
              <button onClick={() => {this.handleStage(-1)}} className="create-group-stage-back-button">Back</button>
              <button onClick={() => {this.handleStage(1)}} className="create-group-stage-button">Next</button>
            </div>  
        </div>
      </div>  
    )
  }
}

export default withRouter(EventForm);