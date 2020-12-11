import React from 'react';

var MovieChoice = ({handleWatchedMoviesContainerClick, handleUnwatchedMoviesContainerClick}) => {

return (

    <div className="movie-list-options">
        <button
      onClick={() => handleUnwatchedMoviesContainerClick()}>Unwatched Movies</button>
      <button
      onClick={() => handleWatchedMoviesContainerClick()}>Watched Movies</button>
    </div>

)

}

export default MovieChoice;