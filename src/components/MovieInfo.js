import React from 'react';

var MovieInfo = ({movie}) => (
  <div className="movieInfo" key={movie.id}>
    <div className="movie-title">
      {movie.title}
    </div>
  </div>
);

export default MovieInfo;