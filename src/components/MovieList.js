import React from 'react'
import { MovieCard } from './MovieCard'
import AddModvie from './AddMovie'
import { Link } from 'react-router-dom'


export const MovieList = ({ movies, setMovies, filterTitle, filterRating }) => {
  return (
    <div>
      <div>
        <AddModvie setMovies={setMovies} movies={movies} />
      </div>
      <div className='movielist'>
        {movies
          .filter(movie =>
            movie.title
              .toLowerCase().includes(filterTitle.toLowerCase()) &&
            movie.rating >= filterRating
          )
          .map(movie => {
            return <Link to={movie.title}>
              <MovieCard movie={movie} key={Math.random()} />
            </Link>
          })}
      </div>
     </div>
  )
        }

