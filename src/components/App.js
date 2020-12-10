import React from 'react';
import Search from './Search.js';
import MovieList from './MovieList.js';


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
    movies: []
  }
}

componentDidMount() {
  this.setState({
    movies: sample
  })
}

getMovies(query) {
  this.setState({
    movies : []
})
}

handleSearchInputChange(query) {
  console.log(query);
}

handleMovieInfoTitleClick(){
  console.log('titleClicked');
}


  render(){
    return(
    <div className="movie-container">
      Movie Titles and more!
      <div className="search">
        <Search handleSearchInputChange={this.handleSearchInputChange.bind(this)} />
      </div>

      <div className="movie-list">
        <MovieList sample={sample}/>
      </div>

    </div>
  )}
}


export default App;
