import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MovieList = lazy(() => import('../components/MovieList'));

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MovieList />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};
export default HomePage;
