import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { ReactComponent as Exit } from 'components/img/icons/Exit.svg';

import { getMovieById } from '../../services/fetchMovies';
import { BASE_URL} from 'components/utils/const';
import {
  FilmWrapper,
  StyledList,
  ListItem,
  FilmImg,
  FilmTitle,
  FilmDescr,
  GoBackLink,
  FilmSubTitle,
  StyledListDescr,
  Wrapper
  
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log(useParams());
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
        console.log(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <GoBackLink>
        <Exit/>
        <Link to={backLinkHref}>
          <Wrapper>Go back</Wrapper>
        </Link>
      </GoBackLink>
      
      <FilmWrapper>
        <FilmImg
          src={`${BASE_URL}${movie.poster_path}`}
          alt={movie.name}
        />
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescr>{movie.overview}</FilmDescr>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDescr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDescr>
        </div>
      </FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </ListItem>
        </StyledList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MoviesDetails