import { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import {Box,ListFilms, Wrapper ,Title,ButtonLoad} from './MovieList.styled';
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

  }


  return (
    <Box>
      <Title>Trending today</Title>
      <ListFilms >
          {movies.map(({id,activeId,original_title,poster_path}) => (
          
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
      <ButtonLoad type='button'onClick={handleClick}>Load More</ButtonLoad>
    </Box>
  
  );
};

export default MovieList;