import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '472a7d35f0d46df70840d9ca53a79985';

export const getTrendingMovies = async () => {
  const responce = await axios.get(
    `trending/movie/day?language=en-US&api_key=${KEY}`
  );
  return responce.data;
};

export const findMoviesByInput = async input => {
  const response = await axios.get(
    `search/movie?query=${input}&include_adult=false&language=en-US&page=1&api_key=${KEY}`
  );
  return response.data.results;
};

export const getMoviesDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?language=en-US&api_key=${KEY}`
  );
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?language=en-US&api_key=${KEY}`
  );
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?language=en-US&api_key=${KEY}}`
  );
  return response.data.results;
};
