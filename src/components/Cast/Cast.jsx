import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from '../../services/fetchMovies';
import { BASE_URL, PLACEHOLDER } from 'components/utils/const';
import { ListItem, StyledList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <StyledList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <ListItem key={id}>
              <img
                src={`${
                  profile_path
                    ? BASE_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </ListItem>
          ))}
        </StyledList>
      }
    </>
  );
};

export default Cast;