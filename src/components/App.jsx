import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import NotFoundPage from 'pages/NotFoundPage';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
