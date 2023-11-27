import { Link, useLocation } from 'react-router-dom';
import { List } from './PopularMovies.styled';

export const PopularMovies = ({ data }) => {
    const location = useLocation();
  return (
    <List>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>{title}</Link>
        </li>
      ))}
    </List>
  );
};
