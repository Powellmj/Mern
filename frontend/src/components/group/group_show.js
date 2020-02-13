import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexContainer from '../event/event_index_container';

class GroupShow extends React.Component {

  componentDidMount() {
    this.props.requestGroup((this.props.location.pathname).replace(this.props.match.path, ''))
  }

  render() {
    if (this.props.group) {
      return (
        <div className="group-show-container">
          <div className="group-show-overview">
          <div className="group-show-picture"></div>
            <div className="group-show-titlebox">
              <div className="group-show-title">{this.props.group.title}</div>
              <div className="group-show-info">{this.props.group.location}</div>
              <div className="group-show-info">402 Members</div>
              <div className="group-show-info">Organized by {this.props.group.organizer}</div>
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
              <div className="group-show-desc">{this.props.group.desc}</div>
            </div>
            <div className="group-show-lower-right"></div>
            <EventIndexContainer />
          </div>
        </div>
      );
    } else {
      return null
    }
  }

}

export default withRouter(GroupShow);