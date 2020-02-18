import React from 'react';
import { withRouter } from 'react-router-dom';

const GroupIndexItem = (props) => {
  const handleClick = () => {
    props.history.push({pathname: `/groups/${props.group._id}`, state: { group: props.group }});
  }

  return (
    <div onClick={() => {handleClick(props.group.id)}} className="index-item" style={props.group.picture ? {backgroundImage: `url(${props.group.picture})`} : null}>
      <div className="index-item-text">
        <div className="index-item-title">{props.group.title}</div>
        <div className="index-item-members">
          {props.group.members.length + 1}
          {props.group.members.length + 1 === 1 ? " Member" : " Members"}
        </div>
      </div>
    </div>
  )
};

export default withRouter(GroupIndexItem);