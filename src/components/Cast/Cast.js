import { getMovieCast } from "api";
import { Loader } from "components/Loader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';

export default function Cast() {
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();
    useEffect(() => {
        if (!movieId) return;
        const searchCast = async () => {
        try {
          setIsLoading(true);
          setError(false);
            const data = await getMovieCast(movieId);
            console.log(data);
          setCast(data);
        } catch (error) {
            setError(true);
            toast.error('Please, try to reload this page');
        } finally {
          setIsLoading(false);
        }
      };
      searchCast();
    }, [movieId]);


    return (
      <>
        {isLoading && <Loader />}
            {cast && cast.length === 0 && <p>There are no any information</p>}
            {!error && cast.map(({ name, character, profile_path, id }) => (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    width={150}
                    alt={name}
                  />
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>
                    {character}
                  </p>
                </li>
            ))}
      </>
    );
}