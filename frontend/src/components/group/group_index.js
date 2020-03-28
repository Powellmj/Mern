import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      groups: []
    }
    this.filterGroups = this.filterGroups.bind(this);
  }


  componentDidMount(){
    this.props.fetchAllGroups()
  }

  handleClick = () => {
    this.props.history.push({ pathname: `/calendar/` });
  }

  filterGroups() {
    let filteredGroups = this.props.groups.filter(group => {
      if (group.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
        return group
      }
    })
    this.state.groups = filteredGroups
  }

  handleUpdate() {
    return e => this.setState({
      searchTerm: e.currentTarget.value
    });
  }

  render(){
    this.filterGroups()

    return (
      <div className="groups-index">
        <div className="index-banner">
          <div className="index-banner-header" >Find your next simulation</div>
          <div className="index-banner-text">{`${this.props.groups.length}`} groups near you</div>
        </div>
        <div className="index-search-pos">
          <div className="index-search">
            <input 
            value={this.state.searchTerm}
            onChange={this.handleUpdate()}
            className="index-search-input" 
            placeholder="Search"/>
            <i className="fas fa-search"></i>
          <div className="banner-buttons">
            <div className="banner-button active-banner-button">Groups</div>
            <div onClick={this.handleClick} className="banner-button">Calendar</div>
          </div>
          </div>
        </div>
        <div>
          <ul className="index-item-list">
            {
              this.state.groups.map((group, i) => {
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
                  <Link to={`/groups/create`}>
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
              this.state.groups.map((group, i) => (
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