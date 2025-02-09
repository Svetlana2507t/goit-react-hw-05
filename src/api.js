import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const endURL = 'language=en-US';
//const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const readAccessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${readAccessToken}`,
  },
};

export function fetchMovies(searchText) {
  let url;

  if (searchText) {
    url =
      axios.defaults.baseURL +
      'search/movie?query=' +
      encodeURIComponent(searchText) +
      '&' +
      endURL;
  }
  if (!searchText) {
    url = axios.defaults.baseURL + 'trending/movie/day?' + endURL;
  }

  return axios
    .get(url, options)
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      //console.error('Error fetching movies:', error);
      throw error;
    });
}

export function fetchTrendingMovies() {
  let url;

  url = axios.defaults.baseURL + 'trending/movie/day?' + endURL;

  return axios
    .get(url, options)
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      //console.error('Error fetching movies:', error);
      throw error;
    });
}

export function fetchMovieById(movieId) {
  let url = axios.defaults.baseURL + `movie/${movieId}`;

  return axios
    .get(url, options)
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      //console.error('Error fetching movies:', error);
      throw error;
    });
}

export function fetchReviewsByMovieId(movieId) {
  let url = axios.defaults.baseURL + `movie/${movieId}/reviews`;

  return axios
    .get(url, options)
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      //console.error('Error fetching movies:', error);
      throw error;
    });
}

export function fetchCastByMovieId(movieId) {
  let url = axios.defaults.baseURL + `movie/${movieId}/credits`;

  return axios
    .get(url, options)
    .then(response => {
      //console.log(response.data);
      return response.data;
    })
    .catch(error => {
      //console.error('Error fetching movies:', error);
      throw error;
    });
}
