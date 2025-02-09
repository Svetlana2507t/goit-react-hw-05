import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieById } from '../api';
import s from './MovieDetails.module.css'; // Import the CSS module

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackUrl = useRef(location.state?.from ?? '/movies');

  const [movie, setMovie] = useState(null);
  const baseImgURL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.container}>
      <Link className={s.goBack} to={goBackUrl.current}>
        Go back
      </Link>
      <img
        className={s.moviePoster}
        src={`${baseImgURL}${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className={s.movieTitle}>{movie.title}</h2>
      <nav className={s.navLinks}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
