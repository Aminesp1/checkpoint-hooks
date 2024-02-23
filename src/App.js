import { useState } from 'react';
import './App.css';
import { MovieList } from './components/MovieList';
import { movieData } from './data';
import Filter from './components/Filter';
import MovieTrailer from './components/MovieTrailer';
import { Route, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Profile from './components/Profile';
import PrivatRoute from './components/PrivatRoute';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  console.log(movies);
  const admin = true
  return (
    <div>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} filterRating={filterRating} admin={admin} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating} />} />
        <Route path="/:title" element={<MovieTrailer movies={movies}/>} />
        <Route path="/profile"  element ={<PrivatRoute admin={admin}><Profile /></PrivatRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
