import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { HashLink as ALink } from 'react-router-hash-link';
import EventIndexContainer from '../event/event_index_container';
import GroupProfileUploadForm from '../upload/group_profile_upload_form';

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
          <div className="group-show-picture">
            <GroupProfileUploadForm group={this.props.group} currentUser={this.props.currentUser}/>
          </div>
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
                <ALink className="group-show-menu-item" to={`/groups/${this.props.group._id}/#description`}>About</ALink>
                <ALink className="group-show-menu-item"to={`/groups/${this.props.group._id}/#events`}>Events</ALink>
                <ALink className="group-show-menu-item"to={`/groups/${this.props.group._id}/#members`}>Members</ALink>
                <ALink className="group-show-menu-item"to={`/groups/${this.props.group._id}/#photos`}>Photos</ALink>
                <ALink className="group-show-menu-item"to={`/groups/${this.props.group._id}/#discussions`}>Discussions</ALink>
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
              <a id="description">
              <div className="group-show-desc-title">What we're about</div>
              <div className="group-show-desc">{this.props.group.desc}</div>
              </a>
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