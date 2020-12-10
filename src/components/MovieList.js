import MovieInfo from './MovieInfo.js';
import React from 'react';

var MovieList = ({movies}) => (

  <div className="video-list">
    {movies.map((movie) =>
      <div>
        <MovieInfo
        movie={movie}
        key={movie.id}
        title={movie.title}
        handleMovieInfoTitleClick={movies.handleMovieInfoTitleClick} />
      </div>
  )}
  </div>
);

export default MovieList;