import React from 'react';
import { withRouter } from 'react-router-dom';

const GroupIndexItem = (props) => {
  const handleClick = () => {
    props.history.push({pathname: `groups/${props.group._id}`, state: { group: props.group }});
  }

  return (
    <div onClick={() => {handleClick(props.group.id)}} className="index-item">
      <div className="index-item-text">
        <div className="index-item-title">{props.group.title}</div>
        <div className="index-item-members">42069 members</div>
      </div>
    </div>
  )
};

export default withRouter(GroupIndexItem);