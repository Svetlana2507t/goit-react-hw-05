import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import fetchMovies from '../api';
import { useState } from 'react';

const MovieList = lazy(() => import('../components/MovieList'));
// const [movies, setMovies] = useState([]);

// const NotFoundPage = lazy(() => import('./NotFoundPage'));

const HomePage = () => {
  fetchMovies();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<MovieList />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};
export default HomePage;
