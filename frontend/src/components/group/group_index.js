import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  componentDidMount(){
    this.props.fetchAllGroups()
  }

  render(){
    const links = this.props.linkRoutes;

    return (
      <div className="groups-index">
        <div className="index-banner">
          <div className="index-banner-header" >Find your next simulation</div>
          <div className="index-banner-text">{`${this.props.groups.length}`} groups near you</div>
        </div>
        <div className="index-search-pos">
          <div className="index-search">
            <input className="index-search-input" placeholder="Search"></input>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div>
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