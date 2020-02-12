import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.requestGroup('5e432584119bdd8b935f72a3')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>hi</h3>
      </div>
    );
  }

}

export default withRouter(GroupShow);