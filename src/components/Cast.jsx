import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastByMovieId } from '../api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const baseImgURL = 'https://image.tmdb.org/t/p/w200/';

  //console.log('MovieID cast : ', movieId);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastByMovieId(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);

  if (!cast) {
    return <h2>Loading...</h2>;
  }
  //console.log('cast', cast);

  if (!cast.cast || cast.cast.length === 0) {
    return <h3>No information.</h3>;
  }
  return (
    <div>
      {/* <h2>{movie.title}</h2>
      <h2>Cast</h2> */}
      {cast.cast.map(c => (
        <li key={c.id}>
          <div></div>
          <img src={`${baseImgURL}${c.profile_path}`} />
          <p>{c.name}</p>
          <h4>{c.character}</h4>
        </li>
      ))}
    </div>
  );
};

export default Cast;
