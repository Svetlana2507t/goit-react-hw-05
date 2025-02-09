import { useEffect, useState } from 'react';
import { fetchMovies, fetchTrendingMovies } from '../api';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  //console.log('location: ', location);

  useEffect(() => {
    const getMovies = async () => {
      try {
        let data;
        // When query is undefined, null, or empty, decide which async function to use:
        if (query === null) {
          data = await fetchTrendingMovies();
        } else if (query === '') {
          data = [];
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

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className={s.container}>
      <h2>Movies:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
