import { getMovieReviews } from "api";
import { Loader } from "components/Loader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';

export default function Reviews() {
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
      const searchReviews = async () => {
        try {
          setIsLoading(true);
          setError(false);
          const data = await getMovieReviews(movieId);
          setReviews(data);
        } catch (error) {
            setError(true);
            toast.error('Please, try to reload this page');
        } finally {
          setIsLoading(false);
        }
      };
      searchReviews();
    }, [movieId]);

    return (
      <div>
        {isLoading && <Loader />}
        {reviews && reviews.length === 0 && <p>There are no reviews</p>}
        {reviews && (
          <ul>
            {!error && reviews.map(({ author, id, content }) => (
                <li key={id}>
                  <h2>{author}</h2>
                  <p>{content}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
    );
}