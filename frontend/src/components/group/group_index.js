import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  // componentDidMount(){
  //   this.props.fetchAllGroups()
  // }

  render(){
    return (
      <div>
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
    )
  }
};

export default GroupIndex;