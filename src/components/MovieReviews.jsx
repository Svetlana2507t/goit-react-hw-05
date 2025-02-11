import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsByMovieId } from '../api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsByMovieId(movieId);
      setReviews(data);
      setLoading(false);
    };
    getData();
  }, [movieId]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  //console.log('review', reviews);

  if (!reviews.results || reviews.results.length === 0) {
    return <h3>No reviews.</h3>;
  }
  return (
    <div>
      {reviews.results.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default MovieReviews;
