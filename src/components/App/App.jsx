import {Routes,Route} from 'react-router-dom'

import SharedLayout from 'components/SharedLayout/SharedLayout'
import HomePage from '../../pages/HomePage/HomePage'
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
import MoviesDetails from '../../pages/MoviesDetails/MoviesDetails'
import Cast from 'components/Cast/Cast'
import Reviews from 'components/Reviews/Reviews'



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}> 
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> 
      </Route>
    </Routes>
  );
};