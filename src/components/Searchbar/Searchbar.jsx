import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form>
          <input type="text" value={this.props.query} onChange={this.props.handleOnChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Searchbar;