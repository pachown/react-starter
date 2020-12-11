import React from 'react';
import Search from './Search.js';
import MovieList from './MovieList.js';
import MovieAdd from './MovieAdd.js';
import MovieChoice from './MovieChoice.js';
import Ajax from '../ajax.js'



// var sample = [
//   {title: 'Mean Girls', id: 1},
//   {title: 'Hackers', id: 2},
//   {title: 'The Grey', id: 3},
//   {title: 'Sunshine', id: 4},
//   {title: 'Ex Machina', id: 5}
// ];

class App extends React.Component {
constructor(props) {
  super(props);

  this.uniqueID = 0;

  this.state = {
    movies: [],
    shownMovies: [],
    addMovieName : ''
  }
}

componentDidMount() {
  this.setState({
    movies: [],
    shownMovies: []
  })
  Ajax.readAll();
}

handleSearchInputChange(query) {
  var queryContains = [];
  var queryArr = this.state.movies.map((movie) => {
        if (movie.title.toLowerCase().includes(query)) {
          queryContains.push(movie);
        }
      }
    )
    if (queryContains.length === 0){
      queryContains.push({
        title: 'No Titles With That Name',
        key: 0
      });
    }
    this.setState({
      shownMovies: queryContains
    })
}

handleMovieAddButtonClick(){
  var uniqueID = 0
  var movie = {title: this.state.addMovieName, id: this.uniqueID, watched: false
  }
  this.uniqueID++;
  this.setState({
    movies : [...this.state.movies, movie],
    shownMovies:[...this.state.shownMovies, movie]} , function(){console.log(this.state);
    }
  )
}

handleMovieAddInputChange(query) {
  this.setState({
    addMovieName: query
  })
}

handleWatchedMovieClick(movie) {
  var newMoviesState = this.state.movies;
  for (var i = 0; i < newMoviesState.length; i++){
    if (newMoviesState[i].title === movie.title){
      newMoviesState[i].watched = !newMoviesState[i].watched;
    }
  }

  this.setState({
    movies: newMoviesState,
    shownMovies: newMoviesState
  })
}

handleWatchedMoviesContainerClick() {
  var watchedContainer = [];
  var queryArr = this.state.movies.map((movie) => {
        if (movie.watched === true) {
          watchedContainer.push(movie);
        }
      }
    )
    if (watchedContainer.length === 0){
      watchedContainer.push({
        title: 'No Titles Found',
        key: 0
      });
    }
    this.setState({
      shownMovies: watchedContainer
    })
}

handleUnwatchedMoviesContainerClick() {
  var unWatchedContainer = [];
  var queryArr = this.state.movies.map((movie) => {
        if (movie.watched === false) {
          unWatchedContainer.push(movie);
        }
      }
    )
    if (unWatchedContainer.length === 0){
      unWatchedContainer.push({
        title: 'No Titles With That Name',
        key: 0
      });
    }
    this.setState({
      shownMovies: unWatchedContainer
    })
}


  render(){
    return(
    <div className="movie-container">
      Movie Titles and more!
      <div className="movie-add">
        <MovieAdd
        handleMovieAddInputChange={this.handleMovieAddInputChange.bind(this)}
        handleMovieAddButtonClick={this.handleMovieAddButtonClick.bind(this)} />
      </div>
      <div className="search">
        <Search
        handleSearchInputChange={this.handleSearchInputChange.bind(this)} />
      </div>
      <div className="list-choice">
        <MovieChoice
        handleWatchedMoviesContainerClick={this.handleWatchedMoviesContainerClick.bind(this)}
        handleUnwatchedMoviesContainerClick={this.handleUnwatchedMoviesContainerClick.bind(this)}
        />

      </div>
      <div className="movie-list">
        <MovieList
        movies={this.state.shownMovies} handleWatchedMovieClick={this.handleWatchedMovieClick.bind(this)}/>
      </div>

    </div>
  )}
}


export default App;
