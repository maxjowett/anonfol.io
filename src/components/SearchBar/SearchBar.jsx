import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.props.handleOnSubmit}>
          <input type="text" onChange={this.props.handleOnChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;