import { Link } from 'react-router-dom';
import defaultImg from 'components/img/defaultImage.jpg';
import {Item,Img,Title,} from './MovieItem.styled'
import { ImgWrapper } from 'components/FilmsList/FilmsList.styled';
import {TitleBox} from 'components/MovieItem/MovieItem.styled'
const ImgDefaultContainer=defaultImg 


export const MovieItem = ({ url, poster_path, title, activeId, location }) => {


    
    return (
      <Item >
        <Link to={`/movies/${activeId}`} state={{ from: location }}>
          <ImgWrapper>
            <Img
              src={
                poster_path !== null ? `https://image.tmdb.org/t/p/w300${url}`
                 : ImgDefaultContainer
              }
              alt={title}
            />
          </ImgWrapper>
          <TitleBox>
            <Title >{title}</Title>
          </TitleBox>
        </Link>
      </Item>
    );
  };