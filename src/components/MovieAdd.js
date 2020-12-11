import React from 'react';

var MovieAdd = ({handleMovieAddInputChange, handleMovieAddButtonClick}) => (

  <div className="add-movie">

    <input
    type="text"
    onChange={(e) => {handleMovieAddInputChange(e.target.value)}}
    placeholder="add movies here"
    />
    <button className="btn" onClick={handleMovieAddButtonClick}>
      Add Movie
    </button>

  </div>

)

export default MovieAdd;