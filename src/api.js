import axios from 'axios';

//const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const readAccessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${readAccessToken}`,
  },
};

function fetchMovies() {
  return (
    axios
      //.get(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`, options)
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
      )
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      })
  );
}

export default fetchMovies;
