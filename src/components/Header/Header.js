import { NavLink } from 'react-router-dom';
import { StyledHeader, List } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <List>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </List>
      </nav>
    </StyledHeader>
  );
};
