import { findMoviesByInput } from 'api';
import { Loader } from 'components/Loader';
import { PopularMovies } from 'components/PopularMovies/PopularMovies';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const queryToSearch = params.get('query') ?? '';

  const updateSearchParam = newQuery => {
    params.set('query', newQuery);
    setParams(params);
  };

  useEffect(() => {
    const findMovie = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await findMoviesByInput(queryToSearch);
        setMovies(data);
      } catch (error) {
        setError(true);
        toast.error('Please, try to reload this page');
      } finally {
        setIsLoading(false);
      }
    };
    findMovie();
  }, [queryToSearch]);

  const handleSearch = input => {
    updateSearchParam(input);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {movies.length > 0 && !error && <PopularMovies data={movies} />}
    </>
  );
}
