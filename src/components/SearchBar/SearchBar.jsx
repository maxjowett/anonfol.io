import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="g-row">
      <div>
        <form onSubmit={props.handleOnSubmit}>
          <input type="text" onChange={props.handleOnChange} />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;