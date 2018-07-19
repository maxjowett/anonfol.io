import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" value={this.props.query} onChange={this.props.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Searchbar;