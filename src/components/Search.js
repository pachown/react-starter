import React from 'react';

var Search = ({handleSearchInputChange})  => (

      <div className="search-bar">
        Search
        <input
        className="form-control"
        type="text"
        onChange={(e) => {handleSearchInputChange(e.target.value)}}
        placeholder="Search for movies"
        />
      </div>
)

export default Search;
