import { getTrendingMovies } from "api";
import { Loader } from "components/Loader";
import { PopularMovies } from "components/PopularMovies/PopularMovies";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function HomePage() {
     const [movies, setMovies] = useState([]);
     const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const findPopularFilms = async () => {
            try {
                setIsLoading(true);
                setError(false);
                const data = await getTrendingMovies();
                setMovies(data.results);
            } catch (error) {
              setError(true);
              toast.error('Please, try to reload this page')
            } finally {
                setIsLoading(false);
            }
        };
        findPopularFilms();
    }, []);
    
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
              <h1>Trending today</h1>
              {movies.length > 0 && !error && <PopularMovies data={movies} />}
          </div>
        )}
      </>
    );
}