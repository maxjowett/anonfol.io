import React from 'react';

const SearchBar = (props) => {  
  return (
    <div className="search-bar">
      <form onSubmit={props.handleOnSubmit}>
        <input type="text" onChange={props.handleOnChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SearchBar;