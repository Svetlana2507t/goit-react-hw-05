import s from './App.module.css';
import Navigation from './Navigation';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => {
  return (
    <main className={s.root}>
      <Navigation />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
