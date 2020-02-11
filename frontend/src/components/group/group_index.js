import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  // may need another dispatch for groups in area?
  // componentDidMount(){
  //   this.props.fetchAllGroups()
  // }

  render(){
    const links = this.props.linkRoutes;

    return (
      <div>
        <div>
          title
        </div>
        <div>
          <input placeholder="Search"></input>
          <i className="fas fa-search"></i>
        </div>
        <div>
          {/* displays 12 events in area */}
          <ul>
            {
              this.props.groups.map((group, i) => (
                <li key={i}>
                  <GroupIndexItem group={group} />
                </li>
              ))
            }
          </ul>
        </div>
        <hr/>
        <div>
          <div>Take your next step with Meetup</div>
          <div>Start a group to find the people you’re looking for.</div>
          <div>
            <ul>
            {
              this.props.linkTitles.map((title, i) => (
                <li key={i}>
                  <Link to={`/${links[i]}`}>
              <div>{title}</div>
              <div>Learn how</div>
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
          <ul>
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