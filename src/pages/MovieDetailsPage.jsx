import clsx from 'clsx';
import s from '../components/Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="cast" className={buildLinkClass}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={buildLinkClass}>
        Reviews
      </NavLink>
    </nav>
  );
};
export default MovieDetailsPage;
