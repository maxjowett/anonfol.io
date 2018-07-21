import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <div className="search-bar">
            <form onSubmit={props.handleOnSubmit}>
              <input type="text" value={props.query} onChange={props.handleOnChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;