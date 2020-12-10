import React from 'react';
import Search from './Search.js';
import MovieList from './MovieList.js';
import MovieAdd from './MovieAdd.js';


var sample = [
  {title: 'Mean Girls', id: 1},
  {title: 'Hackers', id: 2},
  {title: 'The Grey', id: 3},
  {title: 'Sunshine', id: 4},
  {title: 'Ex Machina', id: 5}
];

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    movies: [],
    shownMovies: [],
    addMovieName : ''
  }
}

componentDidMount() {
  this.setState({
    movies: sample,
    shownMovies: sample
  })
}

getMovies(query) {
  this.setState({
    movies : []
})
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
    console.log(this.state.movies);
}

handleMovieAddButtonClick(){
  var uniqueID = 0
  var movie = {title: this.state.addMovieName, id: uniqueID
  }
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
        <Search handleSearchInputChange={this.handleSearchInputChange.bind(this)} />
      </div>

      <div className="movie-list">
        <MovieList movies={this.state.shownMovies} handleMovieInfoTitleClick={this.handleMovieInfoTitleClick}/>
      </div>

    </div>
  )}
}


export default App;
