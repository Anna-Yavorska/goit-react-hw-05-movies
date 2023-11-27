import { useLocation } from 'react-router-dom';
import { List, Movie } from './PopularMovies.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const PopularMovies = ({ data }) => {
  const location = useLocation();
  return (
    <List>
      {data.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Movie to={`/movies/${id}`} state={{ from: location }}>
            {title}
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
          </Movie>
        </li>
      ))}
    </List>
  );
};
