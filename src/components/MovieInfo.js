import React from 'react';

var MovieInfo = ({movie, handleWatchedMovieClick}) => {


return (
  <div className="movieInfo" key={movie.id}>
    <div className="movie-title">
      {movie.title}
    </div>

    <button
    className={movie.watched ? "watched" : "notWatched"}
    onClick={() => handleWatchedMovieClick(movie)}
    >
    Watched
    </button>

  </div>
)
};


export default MovieInfo;

//options
//terinary if statement