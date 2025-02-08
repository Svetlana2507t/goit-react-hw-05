const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0)
    return (
      <div>
        <h1>Nothing is found</h1>
      </div>
    );
  return (
    <div>
      <h2>Movies: </h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
