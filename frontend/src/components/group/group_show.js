import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(this.props.match.path)
    console.log(this.props)
    this.props.requestGroup('5e432584119bdd8b935f72a3')
  }

  render() {
    return (
      <div>
        <h3>{this.props.groups.title}</h3>
        <h3>{this.props.groups.desc}</h3>
        <h3>{this.props.groups.location}</h3>
        <h3>{this.props.groups.owner}</h3>
      </div>
    );
  }

}

export default withRouter(GroupShow);