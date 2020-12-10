import MovieInfo from './MovieInfo.js';
import React from 'react';

var MovieList = (props) => (

  <div className="video-list">
    {props.sample.map((movie) =>
      <div>
        <MovieInfo
        movie={movie}
        key={movie.id}
        title={movie.title}
        handleMovieInfoTitleClick={props.handleMovieInfoTitleClick} />
      </div>
  )}
  </div>
);

export default MovieList;