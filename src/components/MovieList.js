import React from 'react'
import { MovieCard } from './MovieCard'
import AddModvie from './AddMovie'

export const MovieList = ({ movies, setMovies, filterTitle , filterRating}) => {
  return (
    <div>
      <div>
        <AddModvie setMovies={setMovies} movies={movies} />
      </div>
      <div className='movielist'>
        {movies
          .filter(movie =>
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
           movie.rating >= filterRating
            )
          .map(movie => {
            return <MovieCard movie={movie} key={Math.random()} />
          })}
      </div>
    </div>
  )
}
