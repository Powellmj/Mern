import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Hiya!</h3>
      </div>
    );
  }

}

export default withRouter(GroupShow);