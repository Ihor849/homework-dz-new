import { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import ButtonUpTop from 'components/ButtonUpTop/ButtonUpTop'
import {Box,ListFilms, Wrapper ,Title,ButtonLoad,WrapperBtn} from './MovieList.styled';
import {MovieItem} from 'components/MovieItem/MovieItem'
import { getTrendingMovies } from '../../services/fetchMovies';



const MovieList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)


  useEffect(() => {
   getTrendingMovies(page).then(setMovies);
    
  }, [page]);

  const handleClick=()=>{
    setPage(prev => prev + 1);
    setMovies(prev => [...prev,...movies])

  }
  const onUpTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <Box>
      <Title>Trending today</Title>
      <ListFilms >
          {movies.map(({id,original_title,poster_path}) => (
          
          <Wrapper key={id}>
      
            <MovieItem
                  location={location}
                  key={id}
                  title={original_title}
                  url={poster_path}
                  activeId={id}
                />
          </Wrapper>
        ))}
      
      </ListFilms>
      <WrapperBtn>
        <ButtonLoad type='button'onClick={handleClick}>Load More</ButtonLoad>
        <ButtonUpTop onClick={onUpTop} />
      </WrapperBtn>
    </Box>
  
  );
};

export default MovieList;