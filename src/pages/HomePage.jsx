import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchTrendingMovies } from '../api';

const MovieList = lazy(() => import('../components/MovieList'));

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        let data;
        data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading trending movies...</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
      </Routes>
    </Suspense>
  );
};
export default HomePage;
