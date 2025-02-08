import s from './App.module.css';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className={s.root}>
      <Navigation />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/movies/*" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
