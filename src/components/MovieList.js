import MovieInfo from './MovieInfo.js';
import React from 'react';

var MovieList = ({movies, handleWatchedMovieClick}) => (

  <div className="movie-list">
    {movies.map((movie, i) =>
        <MovieInfo
        key={i}
        movie={movie}
        handleWatchedMovieClick={handleWatchedMovieClick} />
  )}
  </div>
);

export default MovieList;