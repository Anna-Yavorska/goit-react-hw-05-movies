import { getMoviesDetails } from "api";
import { Loader } from "components/Loader";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, Outlet, useParams, useLocation } from 'react-router-dom';

export default function MovieDetailsPage() {
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();

    const location = useLocation();
    const backLinkRef = useRef(location);

    useEffect(() => {
      const searchDetails = async id => {
        try {
          setIsLoading(true);
          setError(false);
          const data = await getMoviesDetails(id);
          setDetails(data);
        } catch (error) {
            setError(true);
            toast.error('Please, try to reload this page');
        } finally {
          setIsLoading(false);
        }
      };
      searchDetails(movieId);
    }, [movieId]);


    return (
      <>
        {isLoading && <Loader />}
        {details && (
          <div>
            <Link to={backLinkRef.current.state?.from ?? '/'}>Go back</Link>
            <MovieInfo data={details} />
          </div>
        )}
        {!isLoading && !error && (
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        )}
        <Outlet />
      </>
    );
}