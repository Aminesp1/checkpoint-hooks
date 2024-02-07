import { useState } from 'react';
import './App.css';
import { MovieList } from './components/MovieList';
import { movieData } from './data';
import Filter from './components/Filter';


function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  console.log(movies);
  return (
    <div>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} filterRating={filterRating} />
      <MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating}/>
    </div>
  );
}

export default App;
