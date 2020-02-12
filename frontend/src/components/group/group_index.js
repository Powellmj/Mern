import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  // may need another dispatch for groups in area?
  componentDidMount(){
    this.props.fetchAllGroups()
  }

  render(){
    const links = this.props.linkRoutes;

    return (
      <div className="groups-index">
        <div className="index-banner">
          <Link to="/events">
            <div className="index-banner-header" >Find your next simulation</div>
            <div className="index-banner-text">2027 events near you</div>
          </Link>
        </div>
        <div className="index-search-pos">
          <div className="index-search">
            <input className="index-search-input" placeholder="Search"></input>
            <i className="fas fa-search"></i>
            <div className="index-distance">within 5 miles of location</div>
          </div>
        </div>
        <div>
          {/* displays 12 events in area */}
          {console.log(this.props.groups)}
          <ul className="index-item-list">
            {
              this.props.groups.map((group, i) => {
                if (i < 12) {
                return (
                <li key={i}>
                  <GroupIndexItem group={group} />
                </li>
              )}})
            }
          </ul>
        </div>
        <hr/>
        <div>
          <div className="index-links">
            <div className="index-links-header">Take your next step with Meetin</div>
            <div className="index-links-text">Start a group to find the people you’re looking for.</div>
            <ul className="index-link-list">
            {
              this.props.linkTitles.map((title, i) => (
                <li key={i} className={`index-link index-link-${i}`}>
                  <Link to={`/${links[i]}`}>
              <div className="index-link-title">{title}</div>
              <div className="index-link-learn">Learn how</div>
                  </Link>
                </li>
              ))
            }
            </ul>
          </div>
        </div>
        <hr />
        <div>
          {/* all other groups in the area */}
          <ul className="index-item-list">
            {
              this.props.groups.map((group, i) => (
                <li key={i}>
                  <GroupIndexItem group={group} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
};

export default GroupIndex;