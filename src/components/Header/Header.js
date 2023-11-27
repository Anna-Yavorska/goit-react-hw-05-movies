import { StyledHeader, List, Link } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </nav>
    </StyledHeader>
  );
};
