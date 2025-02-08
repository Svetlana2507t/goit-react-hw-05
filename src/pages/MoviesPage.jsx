import s from '../components/Navigation/Navigation.module.css';
import SearchForm from '../components/SearchForm';
//import MovieDetailsPage from './MovieDetailsPage';
import MovieList from '../components/MovieList';
import { useEffect, useState } from 'react';
import fetchMovies from '../api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;
    console.log('query: ', query);

    const getMovies = async () => {
      try {
        const data = await fetchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };

    getMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) {
      console.log('Empty query');
      return 'Please enter a searched movie!';
    }
    setQuery(newQuery);
    setMovies([]);
  };

  return (
    <div className={s.wrapper}>
      <h2>Movies Page</h2>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
