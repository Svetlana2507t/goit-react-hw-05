import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsByMovieId } from '../api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  //console.log('MovieID review : ', movieId);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsByMovieId(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }
  //console.log('review', reviews);

  if (!reviews.result || reviews.result.length === 0) {
    return <h3>No reviews.</h3>;
  }
  return (
    <div>
      {/* <h2>{movie.title}</h2>
      <h2>Reviews</h2> */}
      {reviews.results.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
