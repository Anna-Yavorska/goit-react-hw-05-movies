import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  font-size: 18px;
`;

export const Movie = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 3px solid orange;
  gap: 8px;
  text-decoration: none;
  max-width: 250px;
  color: black;
`;
