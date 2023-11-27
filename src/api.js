import axios from 'axios';
const KEY = '472a7d35f0d46df70840d9ca53a79985';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US',
  include_adult: false,
};

export const getTrendingMovies = async () => {
  const responce = await axios.get(`trending/movie/day`);
  return responce.data;
};

export const findMoviesByInput = async input => {
  const response = await axios.get(`search/movie?query=${input}&page=1`);
  return response.data.results;
};

export const getMoviesDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const getMovieAbout = async (movieId, detailsKind) => {
  const response = await axios.get(`movie/${movieId}/${detailsKind}`);
  return response.data;
};
