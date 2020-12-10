import React from 'react';

var Search = ({handleSearchInputChange})  => (

      <div className="search-bar">
        <input
        className="form-control"
        type="text"
        onChange={(e) => {handleSearchInputChange(e.target.value)}}
        />
      </div>
)

export default Search;
