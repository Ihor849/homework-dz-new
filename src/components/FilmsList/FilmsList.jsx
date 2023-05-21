import { useLocation, Link } from 'react-router-dom';
import { BASE_URL } from 'components/utils/const';

import {
  Wrapper,
  FilmItem,
  Img,
  Title,
  ListFilms,
  Box,
} from './FilmsList.styled';
import defaultMovie from 'components/img/defaultMovie.jpeg';

const FilmsList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box>
      <ListFilms>
        {movies.map(({ id, activeId, original_title, poster_path, title }) => (
          <Wrapper key={id}>
            <FilmItem key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <Img
                  src={
                    poster_path !== null
                      ? `${BASE_URL}${poster_path}`
                      : defaultMovie
                  }
                  alt={title}
                />
                <Title>{original_title}</Title>
              </Link>
            </FilmItem>
          </Wrapper>
        ))}
      </ListFilms>
    </Box>
  );
};

export default FilmsList;
