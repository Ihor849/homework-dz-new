// import { Suspense, useEffect, useState } from 'react';
// import {
//   Outlet,
//   useLocation,
//   useParams,
// } from 'react-router-dom';
// import { ReactComponent as Exit } from 'components/img/icons/Exit.svg';
// import { ReactComponent as Masks } from 'components/img/icons/Masks.svg';
// import { ReactComponent as Thumbs } from 'components/img/icons/Thumbs.svg';

// import { getMovieById } from '../../services/fetchMovies';
// import { BASE_URL } from 'components/utils/const';
// import {
//   FilmWrapper,
//   Wrapper,
//   StyledList,
//   ListItem,
//   FilmImg,
//   FilmTitle,
//   FilmDescr,
//   FilmSubTitle,
//   StyledListDescr,
//   Linkback,
//   CastNavLink,
//   Description,
//   Genre,
//   Release,
// } from './MoviesDetails.styled';

// const MoviesDetails = () => {
//   const { movieId } = useParams();
//   console.log(useParams());
//   const [movie, setMovie] = useState('');
//   const location = useLocation();

//   const backLinkHref = location.state?.from ?? '/movies';
//   useEffect(() => {
//     const fetchMovieById = async () => {
//       try {
//         const movieById = await getMovieById(movieId);
//         setMovie(movieById);
//         console.log(movieById);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     fetchMovieById();
//   }, [movieId]);

//   return (
//     <>
//       <Wrapper>
//         <Linkback to={backLinkHref}>
//           <Exit />
//           Go back
//         </Linkback>
//         <h2>Additional information</h2>
//           <StyledList>
//             <ListItem>
//               <CastNavLink to="cast" state={location.state}>
//                 Cast<Masks/>
//               </CastNavLink>
//             </ListItem>
//             <ListItem>
//               <CastNavLink to="reviews" state={location.state}>
//                 Reviews<Thumbs/>
//               </CastNavLink>
//             </ListItem>
//           </StyledList>
//       </Wrapper>

//       <FilmWrapper>
//         <FilmImg src={`${BASE_URL}${movie.poster_path}`} alt={movie.name} />
//         <Description>
//           <FilmTitle>{movie.original_title}</FilmTitle>
//           <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
//           <FilmSubTitle>Overview</FilmSubTitle>
//           <FilmDescr>{movie.overview}</FilmDescr>
//           <FilmSubTitle>Genres</FilmSubTitle>
//           <StyledListDescr>
//             {movie.genres?.map(genre => (
//               <Genre key={genre.id}>{genre.name}</Genre>
//             ))}
//           </StyledListDescr>
//           <Release>Release: <span>{movie.release_date}</span> </Release>

//         </Description>
//       </FilmWrapper>
//       <div>
//         <Suspense fallback={<div>Loading subpage...</div>}>
//           <Outlet />
//         </Suspense>
//       </div>
//     </>
//   );
// };
// export default MoviesDetails;
