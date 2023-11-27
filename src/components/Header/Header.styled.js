import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
padding: 20px 50px;
background-color: orange;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  color: black;
  font-weight: 700;
  text-decoration: none;
  
  &.active {
    color: white;
  }
`;