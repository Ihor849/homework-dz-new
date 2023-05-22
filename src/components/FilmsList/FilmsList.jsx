import { useLocation, Link } from 'react-router-dom';
import { BASE_URL } from 'components/utils/const';

import {
  ImgWrapper,
  FilmItem,
  Img,
  Title,
  ListFilms,
  Box,
  BoxImg,
  TitleBox,
} from './FilmsList.styled';
import defaultMovie from 'components/img/defaultMovie.jpeg';

const ImgDefaultMovie = defaultMovie;

const FilmsList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box>
      <ListFilms>
        {movies.map(({ id, original_title, poster_path, title }) => (
          
            <FilmItem key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <BoxImg>
                  <ImgWrapper>
                    <Img
                      src={
                        poster_path !== null
                          ? `${BASE_URL}${poster_path}`
                          : ImgDefaultMovie
                      }
                      alt={title}
                    />
                  </ImgWrapper>
                  <TitleBox>
                    <Title>{original_title}</Title>
                  </TitleBox>
                </BoxImg>
              </Link>
            </FilmItem>
          
        ))}
      </ListFilms>
    </Box>
  );
};

export default FilmsList;
