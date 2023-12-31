import React, { useState , useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';


//fcc487c6

const movie1 = {
  "Title": "Ponyo",
  "Year": "2008",
  "imdbID": "tt0876563",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_SX300.jpg"
}

const API_URL = 'http://www.omdbapi.com?apikey=fcc487c6';

const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  }

  const goHome = async () => {
    window.location = '/';
  }

  const aboutMe = async () => {
    window.location = '/about-me';
  }

  const contact = async () => {
    window.location = '/contact';
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  return (
    <div className="app">
      <nav>
        <div class="nav-name" 
          onClick={() => goHome()}>Maura Peterson</div>
        <button class="nav-button home" 
        onClick={() => goHome()}>Home</button>
        <button class="nav-button" onClick={() => aboutMe()}>About Me</button>
        <button class="nav-button" onClick={() => contact()}>Contact</button>
      </nav>
      <div className='movie-land'>

      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
          />
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
              ))}
            
          </div>
        ) :
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

      
        </div>
    </div>
  );
}

export default App;

