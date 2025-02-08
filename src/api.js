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

function fetchMovies(searchText) {
  const startURL = 'https://api.themoviedb.org/3/';
  const endURL = 'language=en-US';
  let url;

  if (searchText) {
    url =
      startURL +
      'search/movie?query=' +
      encodeURIComponent(searchText) +
      '&' +
      endURL;
  }
  if (!searchText) {
    url = startURL + 'trending/movie/day?' + endURL;
  }
  // 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  // 'https://api.themoviedb.org/3/search/movie?query=ddd&language=en-US&page=1'
  //.get(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`, options)

  return axios
    .get(url, options)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
      throw error;
    });
}

export default fetchMovies;
