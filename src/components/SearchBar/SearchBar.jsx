import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleOnSubmit}>
        <input type="text" onChange={props.handleOnChange} />
      </form>
    </div>
  );
}

export default SearchBar;