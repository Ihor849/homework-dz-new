// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getMovieByQuery } from '../../services/fetchMovies';

// import Form from 'components/SearchForm/SearchForm';
// import FilmsList from 'components/FilmsList/FilmsList'
// import ButtonUpTop from 'components/ButtonUpTop/ButtonUpTop'
// import {ButtonLoad,Wrapper} from './MoviesPage.styled'

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1)
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const currentQuery = searchParams.get('query');
//     if (!currentQuery) return;

//     const fetchMovieByQuery = async () => {
//       try {
//         const movieByQuery = await getMovieByQuery(currentQuery,page);
//         setMovies(movieByQuery);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     fetchMovieByQuery();
//   }, [searchParams, page]);
  
//   const handleClick=()=>{
//     setPage(prev => prev + 1);
//     setMovies(prev => [...prev,...movies])
     
//   }
//   const onUpTop = () => {
//     if (window.pageYOffset > 0) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };
  
//   return (
//     <>
//       <Form setSearchParams={setSearchParams} />
//       {movies.length > 0 && <div>
//         <FilmsList movies={movies} />
//         <Wrapper>
//           <ButtonLoad type='button' onClick={handleClick}>Load More</ButtonLoad>
//           <ButtonUpTop onClick={onUpTop} />
//         </Wrapper>
//       </div>}
//     </>
//   );
// };

// export default MoviesPage;