import s from '../components/App.module.css';
import SearchForm from '../components/SearchForm';
//import MovieDetailsPage from './MovieDetailsPage';
import MovieList from '../components/MovieList';
import { useState } from 'react';
// import fetchMovies from '../api';

const MoviesPage = () => {
  // const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) {
      //console.log('Empty query');
      return 'Please enter a searched movie!';
    }
    setQuery(newQuery);
  };

  return (
    <div className={s.wrapper}>
      {/* <h2>Movies Page</h2> */}
      <SearchForm onSubmit={handleSubmit} />
      <MovieList query={query} />
    </div>
  );
};

export default MoviesPage;
