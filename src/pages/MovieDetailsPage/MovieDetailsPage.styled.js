import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 8px;
  font-weight: 500;
  text-decoration: none;
  border: 4px solid orange;
  border-radius: 4px;
  background-color: darkgray;
  color: white;
`;

export const Details = styled(NavLink)`
  margin-top: 16px;
  display: inline-block;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;

  &.active {
    color: orange;
  }
`;
