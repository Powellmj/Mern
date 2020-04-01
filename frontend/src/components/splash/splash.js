import React from 'react';
import { Link } from 'react-router-dom'

class Splash extends React.Component {

  render() {
    const demo = {
      email: 'Morpheus@gmail.com',
      password: 'hello123'
    }
    return (
      <div className="splash-container">
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
          <Link className="splash-topic" to={'/signup'}>Join a movement</Link>
          <Link className="splash-topic" to={'/signup'}>Learn to cook</Link>
          <Link className="splash-topic" to={'/signup'}>Train for a marathon</Link>
          <Link className="splash-topic" to={'/signup'}>Build a mobile app</Link>
          <Link className="splash-topic" to={'/signup'}>Hike a mountain</Link>
          <Link className="splash-topic" to={'/signup'}>Practice a language</Link>
        </div>
      </div>
    );
  }
}

export default Splash;