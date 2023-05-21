import { Link } from 'react-router-dom';
import defaultImg from 'components/img/defaultImage.jpg';
import {Item,Img,Title} from './MovieItem.styled'



export const MovieItem = ({ url, poster_path, title, activeId, location }) => {


    
    return (
      <Item >
        <Link to={`/movies/${activeId}`} state={{ from: location }}>
          <Img
            src={
              poster_path !== null ? `https://image.tmdb.org/t/p/w300${url}` : defaultImg
            }
            alt={title}
          />
          <Title >{title}</Title>
        </Link>
      </Item>
    );
  };