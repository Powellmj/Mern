import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndex from '../event/event_index';

class GroupShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: {}
    }
  }

  componentDidMount() {
    this.setState({ group: this.props.location.state.group })
  }

  render() {
    if (this.state.group) {
      return (
        <div className="group-show-container">
          <div className="group-show-overview">
          <div className="group-show-picture"></div>
            <div className="group-show-titlebox">
              <div className="group-show-title">{this.state.group.title}</div>
              <div className="group-show-info">{this.state.group.location}</div>
              <div className="group-show-info">402 Members</div>
              <div className="group-show-info">Organized by {this.state.group.owner}</div>
            </div>
          </div>
            <div className="group-show-menus-bar">
              <div className="group-show-menus">
                <div className="group-show-menu-item">About</div>
                <div className="group-show-menu-item">Events</div>
                <div className="group-show-menu-item">Members</div>
                <div className="group-show-menu-item">Photos</div>
                <div className="group-show-menu-item">Discussions</div>
              </div>
              <div className="group-show-join-button-panel">
              <div className="group-show-join-button">Join this group</div>
            </div>
          </div>
            <div className="group-show-lower">
            <div className="group-show-desc-container">
              <div className="group-show-desc-title">What we're about</div>
              <div className="group-show-desc">{this.state.group.desc}</div>
            </div>
            <div className="group-show-lower-right"></div>
            <EventIndex />
          </div>
        </div>
      );
    } else {
      return null
    }
  }

}

export default withRouter(GroupShow);