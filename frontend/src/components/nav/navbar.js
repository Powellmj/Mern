
import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-right">
          <Link className="navbar-group" to={'groups/create'}>Start a new group</Link>
          <button className="navbar-link" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="navbar-right">
          <div className="navbar-group">Start a new group</div>
          <Link className="navbar-link" to={'/login'}>Log in</Link>
          <Link className="navbar-link" to={'/signup'}>Sign up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link className="logo" to={'/'}><span className="logo big">m</span>eetin</Link>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;