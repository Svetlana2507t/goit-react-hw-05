import s from '../components/App.module.css';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const getMovies = async () => {
      try {
        let data;

        if (query === null || query === '') {
          data = { results: [] };
        } else {
          data = await fetchMovies(query);
        }
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = newQuery => {
    if (!newQuery.trim()) {
      return 'Please enter a searched movie!';
    }
    setQuery(newQuery);
    setSearchParams({ query: newQuery });
  };

  return (
    <div className={s.wrapper}>
      <SearchForm onSubmit={handleSubmit} />

      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <div>No movies found.</div>
      )}
    </div>
  );
};

export default MoviesPage;
