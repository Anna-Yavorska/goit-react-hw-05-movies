import { getMovieAbout } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Card, List } from './Cast.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
        const data = await getMovieAbout(movieId, 'credits');
        setCast(data.cast);
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
      {error && <p>Something went wrong. Please, try to reload the page</p>}
      {cast && cast.length === 0 && <p>There are no any information</p>}
      {cast && (
        <List>
          {cast.map(({ name, character, profile_path, id }) => (
            <Card key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={150}
                alt={name}
              />
              <p>
                <b>{name}</b>
              </p>
              <p>{character}</p>
            </Card>
          ))}
        </List>
      )}
    </>
  );
}
