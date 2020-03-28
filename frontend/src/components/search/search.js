import React from 'react';
import { Link } from "react-router-dom";
import "./search.css"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.update = this.update.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ search: e.currentTarget.value });
    this.getResults();
  }

  getResults() {
    
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className='search-input'
          placeholder='Search Bitter'
          value={this.state.search}
          onChange={(e) => this.update(e)}
        />
        {this.getResults()}
        <i className="fas fa-search search-glass"></i>
      </div>
    )
  };
};
export default Search; 