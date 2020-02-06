import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    // console.log(movieData)

    // each MovieCard component has its own unique key
    return (
      movieData.map( (movie) => <MovieCard key={movie.title} movieData={movie}> </MovieCard>)
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {[this.generateMovieCards()]}
      </div>
    )
  }
}


