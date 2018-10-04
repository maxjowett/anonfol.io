import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  handleSubmit(e) {
    e.preventDefault();

  }

  handleChange(e) {
    
  }
  render() {
    return (
      <form>
        <input type="text">
        </input>
      </form>
    );
  }
}

export default SearchBar;