import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  handleClick() {
    alert("Sorry, no one taught me how to do anything yet!")
  }

  render() {
    const demo = {
      email: 'Morpheus@gmail.com',
      password: 'hello123'
    }
    return (
      <div>
        <div className="splash-video-filter"></div>
        <div className="splash-video">
          <video autoPlay loop>
            <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" />
          </video>
        </div>
        <div className="splash-video-text">
          <div className="splash-header">The real world can wait</div>
          <div className="splash-body">Join a virtual group to meet people, try something new, or do more of what you love.</div>
          <div className="splash-links">
            <Link className="splash-link" to={'/signup'}>Join Meetin</Link>
            <div onClick={() => { this.props.processForm(demo) }} className="splash-link splash-demo" to={'/signup'}>Try our demo!</div>
          </div>
        </div>
        <div className="splash-topic-bar">
          <div onClick={this.handleClick} className="splash-topic">Join a movement</div>
          <div onClick={this.handleClick} className="splash-topic">Learn to cook</div>
          <div onClick={this.handleClick} className="splash-topic">Train for a marathon</div>
          <div onClick={this.handleClick} className="splash-topic">Build a mobile app</div>
          <div onClick={this.handleClick} className="splash-topic">Hike a mountain</div>
          <div onClick={this.handleClick} className="splash-topic">Practice a language</div>
        </div>
      </div>
    );
  }
}

export default MainPage;