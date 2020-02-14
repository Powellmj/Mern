import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import EventIndexContainer from '../event/event_index_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestGroup(this.props.match.params.group_id)
  }

  handleClick() {
    this.props.joinGroup(this.props.group._id, this.props.currentUser.id)
    this.props.requestGroup(this.props.match.params.group_id)
    document.querySelector(".group-show-button").style.backgroundColor = "white"
    document.querySelector(".group-show-button").style.border = "1px solid gray"
    document.querySelector(".group-show-button").style.color = "gray"
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
              <div className="group-show-info">
                {this.props.group.members.length}
                {this.props.group.members.length === 1 ? " Member" : " Members"}
                </div>
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
              <div onClick={this.handleClick} className="group-show-button">Join this group</div>
              {this.props.currentUser.id === this.props.group.owner_id ? (
              <Link to={`/groups/${this.props.group._id}/create`}>
                <div className="group-show-button group-plan">Plan an Event</div>
              </Link>
              ) : null }
            </div>
          </div>
            <div className="group-show-lower">
            <div className="group-show-lower-left">
              <div className="group-show-desc-container">
              <div className="group-show-desc-title">What we're about</div>
              <div className="group-show-desc">{this.props.group.desc}</div>
              </div>
              <EventIndexContainer />
            </div>
            <div className="group-show-lower-right"></div>
          </div>
        </div>
      );
    } else {
      return null
    }
  }

}

export default withRouter(GroupShow);