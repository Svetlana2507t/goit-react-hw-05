import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}
export default Navigation;
